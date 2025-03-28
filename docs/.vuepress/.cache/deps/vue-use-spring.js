import {
  Fragment,
  computed,
  createVNode,
  defineComponent,
  getTransitionRawChildren,
  isRef,
  onScopeDispose,
  onUpdated,
  reactive,
  ref,
  toRaw,
  toValue,
  warn,
  watch
} from "./chunk-JN5NFW2R.js";

// node_modules/.pnpm/vue-use-spring@0.3.3_vue@3.5.13/node_modules/vue-use-spring/dist/index.mjs
var noWobble = {
  mass: 1,
  tension: 170,
  friction: 26,
  precision: 0.01
};
var gentle = {
  mass: 1,
  tension: 120,
  friction: 14,
  precision: 0.01
};
var wobbly = {
  mass: 1,
  tension: 180,
  friction: 12,
  precision: 0.01
};
var stiff = {
  mass: 1,
  tension: 210,
  friction: 20,
  precision: 0.01
};
var presets = { noWobble, gentle, wobbly, stiff };
var isClient = typeof window !== "undefined";
var raf = isClient ? window.requestAnimationFrame.bind(window) : () => {
};
var cancelRaf = isClient ? window.cancelAnimationFrame.bind(window) : () => {
};
var now = typeof performance !== "undefined" ? performance.now.bind(performance) : Date.now.bind(Date);
var isArray = Array.isArray.bind(Array);
var reusedTuple = [0, 0];
function stepper(secondPerFrame, x, v, destX, spring) {
  const Fspring = -spring.tension * (x - destX);
  const Fdamper = -spring.friction * v;
  const a = (Fspring + Fdamper) / (spring.mass || 1);
  const newV = v + a * secondPerFrame;
  const newX = x + newV * secondPerFrame;
  const precision = spring.precision || 0.01;
  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }
  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}
var msPerFrame = 1e3 / 60;
function defineInitialValues(values, velocities) {
  const newValues = isArray(values) ? [] : {};
  const newVelocities = isArray(values) ? [] : {};
  for (const key in values) {
    newValues[key] = values[key];
    newVelocities[key] = velocities ? velocities[key] : 0;
  }
  return [newValues, newVelocities];
}
var noop = () => {
};
function useSpring(initialValue, springConfiguration = noWobble, options = {}) {
  const onRest = options.onRest || noop;
  const realValues = ref(
    isRef(initialValue) ? initialValue : toValue(initialValue)
  );
  let wasAnimating = false;
  let prevTime = 0;
  let accumulatedTime = 0;
  let animationId;
  watch(
    realValues,
    (current2, old) => {
      if (!wasAnimating) {
        prevTime = now();
        accumulatedTime = 0;
        animate();
      }
    },
    { deep: true }
  );
  const current = defineInitialValues(realValues.value, null);
  const currentValues = ref(current[0]);
  const currentVelocities = ref(current[1]);
  let idealValues = current[0];
  let idealVelocities = current[1];
  if (isClient) {
    prevTime = now();
    accumulatedTime = 0;
    const ideal = defineInitialValues(
      currentValues.value,
      currentVelocities.value
    );
    idealValues = ideal[0];
    idealVelocities = ideal[1];
    animate();
  }
  onScopeDispose(() => {
    if (animationId) {
      cancelRaf(animationId);
    }
  });
  function animate() {
    animationId = raf(() => {
      if (shouldStopAnimation(
        currentValues.value,
        realValues.value,
        currentVelocities.value
      )) {
        if (wasAnimating)
          onRest();
        animationId = null;
        wasAnimating = false;
        return;
      }
      wasAnimating = true;
      const currentTime = now();
      const timeDelta = currentTime - prevTime;
      prevTime = currentTime;
      accumulatedTime += timeDelta;
      if (accumulatedTime > msPerFrame * 10) {
        accumulatedTime = 0;
      }
      if (accumulatedTime === 0) {
        animationId = null;
        return animate();
      }
      const currentFrameCompletion = (accumulatedTime - Math.floor(accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      const framesToCatchUp = Math.floor(accumulatedTime / msPerFrame);
      animateValues(
        framesToCatchUp,
        currentFrameCompletion,
        toValue(springConfiguration),
        toValue(realValues),
        currentValues.value,
        currentVelocities.value,
        idealValues,
        idealVelocities
      );
      animationId = null;
      accumulatedTime -= framesToCatchUp * msPerFrame;
      animate();
    });
  }
  const modifiableValues = isArray(realValues.value) ? [] : {};
  for (const key in realValues.value) {
    modifiableValues[key] = computed({
      // @ts-ignore
      get: () => currentValues.value[key],
      // @ts-ignore
      set: (v) => realValues.value[key] = v
    });
  }
  modifiableValues.reset = (v) => {
    Object.assign(currentValues.value, v);
    Object.assign(realValues.value, v);
    wasAnimating = false;
    animationId = null;
  };
  return reactive(modifiableValues);
}
function shouldStopAnimation(currentValues, values, currentVelocities) {
  for (const key in values) {
    if (currentVelocities[key] !== 0)
      return false;
    if (currentValues[key] !== values[key])
      return false;
  }
  return true;
}
function animateValues(framesToCatchUp, currentFrameCompletion, spring, realValues, currentValues, currentVelocities, idealValues, idealVelocities) {
  for (const key in realValues) {
    let newIdealValue = idealValues[key];
    let newIdealVelocity = idealVelocities[key];
    const value = realValues[key];
    for (let i = 0; i < framesToCatchUp; i++) {
      [newIdealValue, newIdealVelocity] = stepper(
        msPerFrame / 1e3,
        newIdealValue,
        newIdealVelocity,
        value,
        spring
      );
    }
    const [nextIdealValue, nextIdealVelocity] = stepper(
      msPerFrame / 1e3,
      newIdealValue,
      newIdealVelocity,
      value,
      spring
    );
    currentValues[key] = newIdealValue + (nextIdealValue - newIdealValue) * currentFrameCompletion;
    currentVelocities[key] = newIdealVelocity + (nextIdealVelocity - newIdealVelocity) * currentFrameCompletion;
    idealValues[key] = newIdealValue;
    idealVelocities[key] = newIdealVelocity;
  }
}
var positionMap = /* @__PURE__ */ new WeakMap();
var newPositionMap = /* @__PURE__ */ new WeakMap();
var TransitionGroupImpl = defineComponent({
  name: "TransitionGroup",
  props: {
    config: Object,
    tag: String
  },
  setup(props, { slots }) {
    const pos1 = useSpring({ x: 0, y: 0 });
    const pos22 = useSpring({ x: 0, y: 0 });
    const pos3 = useSpring({ x: 0, y: 0 });
    const pos4 = useSpring({ x: 0, y: 0 });
    const positions = {
      Ipsum: pos1,
      Lorem: pos22,
      Dolor: pos3,
      Sit: pos4
    };
    let prevChildren;
    let children;
    window.pos2 = pos22;
    watch(
      () => pos22,
      () => {
        const name = "Lorem";
        console.log("watch pos2");
        const child = children.find((c) => c.key === name);
        if (!child) {
          console.log("not found", name);
        } else {
          const s = child.el.style;
          const dx = pos22.x;
          const dy = pos22.y;
          console.log("watch Lorem", { dx, dy });
          s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        }
      },
      { deep: true, flush: "post" }
    );
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(
        (c) => applyTranslation(c, positions)
      );
      forceReflow();
      movedChildren.forEach((c) => {
        const el = c.el;
        setTimeout(() => {
          pos22.x = 0;
          pos22.y = 0;
          console.log("moved", c.key);
        }, 1e3);
        const cb = el._moveCb = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el._moveCb = null;
          }
        };
        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = toRaw(props);
      const tag = rawProps.tag || Fragment;
      prevChildren = children;
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) ;
        else if (__DEV__) {
          warn(`<TransitionGroup> children must be keyed.`);
        }
      }
      if (prevChildren) {
        for (let i = 0; i < prevChildren.length; i++) {
          const child = prevChildren[i];
          positionMap.set(child, child.el.getBoundingClientRect());
          console.log(
            "saved before render",
            child.key,
            child.el.getBoundingClientRect()
          );
        }
      }
      return createVNode(tag, null, children);
    };
  }
});
var SpringGroup = TransitionGroupImpl;
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
  console.log(
    "saved after render",
    c.key,
    c.el.getBoundingClientRect()
  );
}
function applyTranslation(c, positions) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (c.key === "Lorem")
    pos2.reset({ x: dx, y: dy });
  console.log("reset", c.key, { ...positions[c.key] });
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function forceReflow() {
  return document.body.offsetHeight;
}
export {
  SpringGroup,
  gentle,
  noWobble,
  presets,
  stiff,
  useSpring,
  wobbly
};
/*! Bundled license information:

vue-use-spring/dist/index.mjs:
  (*!
   * vue-use-spring v0.3.3
   * (c) 2020-2024 Eduardo San Martin Morote
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=vue-use-spring.js.map
