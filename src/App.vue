<script setup>
import navigation from "./components/navigation.vue";
import myHeader from "./components/header.vue";
import myFooter from "./components/footer.vue";
</script>
<template>
  <main>
    <navigation @getRequestOpenHamburgerMenu="openHamburgerMenu"></navigation>
    <myHeader></myHeader>
    <!--  -->
    <router-view></router-view>
    <!--  -->
    <myFooter></myFooter>
  </main>
</template>

<script>
export default {};
</script>

<style>
html {
  scroll-behavior: smooth;
}
* {
  font-family: "Poppins", sans-serif;
}
</style>