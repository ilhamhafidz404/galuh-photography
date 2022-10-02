<script setup>
import navigation from "./components/navigation.vue";
import myHeader from "./components/header.vue";
import myFooter from "./components/footer.vue";
import loading from "./components/loading.vue";
</script>
<template>
  <main>
    <loading id="loading" class=""></loading>
    <navigation @getRequestOpenHamburgerMenu="openHamburgerMenu"></navigation>
    <myHeader></myHeader>
    <!--  -->
    <router-view @requestShowLoading="showLoading"></router-view>
    <!--  -->
    <myFooter></myFooter>
  </main>
</template>

<script>
export default {
  methods: {
    showLoading() {
      const loading = document.getElementById("loading");
      loading.classList.remove("hidden");
      setTimeout(() => {
        loading.classList.add("hidden");
      }, 3000);
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