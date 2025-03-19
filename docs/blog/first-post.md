---
title: Membuat Animasi Halus di Vue.js
---

# 🎨 Membuat Animasi Halus di Vue.js

Animasi dalam sebuah aplikasi sangat penting untuk meningkatkan pengalaman pengguna. Pada artikel ini, kita akan membahas bagaimana menggunakan **Vue Transition** untuk animasi yang halus.

## 📌 Contoh Animasi Fading
```html
<template>
  <transition name="fade">
    <p v-if="show">Halo, saya muncul dengan efek fade!</p>
  </transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
