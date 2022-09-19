<script setup>
import navigation from "./components/navigation.vue";
import myHeader from "./components/header.vue";
import gallery from "./components/gallery.vue";
import contact from "./components/contact.vue";
import testimoni from "./components/testimoni.vue";
import myFooter from "./components/footer.vue";
import price from "./components/price.vue";
import hamburgerMenu from "./components/menu.vue";
</script>
<template>
  <main>
    <navigation @getRequestOpenHamburgerMenu="openHamburgerMenu"></navigation>
    <hamburgerMenu></hamburgerMenu>
    <myHeader></myHeader>
    <gallery></gallery>
    <testimoni></testimoni>
    <price></price>
    <contact></contact>
    <myFooter></myFooter>
  </main>
</template>

<script>
export default {
  methods: {
    openHamburgerMenu() {
      const hamburgerMenu = document.getElementById("hamburgerMenu");
      const body = document.querySelector("body");
      body.classList.toggle("h-scrren");
      body.classList.toggle("overflow-hidden");
      hamburgerMenu.classList.toggle("-right-full");
      hamburgerMenu.classList.toggle("right-0");
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
* {
  font-family: "Poppins", sans-serif;
}
body {
  background-color: #fdf9f2;
}
</style>