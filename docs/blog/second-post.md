---
title: Meningkatkan Performa VuePress dengan Lazy Loading
---

# 🚀 Meningkatkan Performa VuePress dengan Lazy Loading

VuePress memiliki banyak fitur canggih, tetapi terkadang kita ingin meningkatkan performa dengan **Lazy Loading** untuk gambar dan komponen. Berikut adalah cara mudah mengimplementasikannya.

## 📌 Contoh Lazy Loading di VuePress
```html
<template>
  <img v-lazy="imageSrc" alt="Gambar Optimasi">
</template>

<script>
export default {
  data() {
    return {
      imageSrc: "https://source.unsplash.com/random/800x600"
    };
  }
};
</script>
