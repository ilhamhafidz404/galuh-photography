<script setup>
import navigation from "./components/navigation.vue";
import myHeader from "./components/header.vue";
import gallery from "./components/gallery.vue";
import contact from "./components/contact.vue";
import testimoni from "./components/testimoni.vue";
import myFooter from "./components/footer.vue";
</script>
<template>
  <main>
    <navigation></navigation>
    <myHeader></myHeader>
    <gallery></gallery>
    <testimoni></testimoni>
    <contact></contact>
    <myFooter></myFooter>
  </main>
</template>

<script>
export default {};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}
body {
  background-color: #fdf9f2;
}
</style>