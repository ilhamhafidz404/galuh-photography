<script setup>
import navigation from "./components/navigation.vue";
import hamburgerMenu from "./components/menu.vue";
import myHeader from "./components/header.vue";
import myFooter from "./components/footer.vue";
</script>
<template>
  <main>
    <navigation @getRequestOpenHamburgerMenu="openHamburgerMenu"></navigation>
    <hamburgerMenu></hamburgerMenu>
    <myHeader></myHeader>
    <!--  -->
    <router-view></router-view>
    <!--  -->
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
</style>