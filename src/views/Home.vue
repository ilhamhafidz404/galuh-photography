<script setup>
import gallery from "../components/gallery.vue";
import contact from "../components/contact.vue";
import testimoni from "../components/testimoni.vue";
import price from "../components/price.vue";
import darkMode from "../components/darkMode.vue";
</script>
<template>
  <gallery></gallery>
  <testimoni></testimoni>
  <price></price>
  <contact></contact>
</template>
    
<script>
export default {
  created() {
    window.scrollTo(0, 0);
    return this.$emit("requestShowLoading");
  },
};
</script>
    
<style>
</style>