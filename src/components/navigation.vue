<script setup>
import darkMode from "./darkMode.vue";
</script>
<template>
  <nav class="p-3 flex justify-between items-center w-[90%] mx-auto">
    <div class="flex items-center">
      <div
        class="
          bg-[#ffd481]/70
          dark:bg-[#ffd481]
          mr-7
          w-[50px]
          h-[50px]
          rounded-full
          flex
          items-center
          justify-center
          shadow-sm
        "
      >
        <router-link :to="{ name: 'home' }">
          <img src="../assets/img/gp_logo.png" class="w-[50px]" />
        </router-link>
      </div>
      <ul
        class="hidden sm:flex text-gray-600 dark:text-gray-100"
        v-show="$route.name !== 'gallery'"
      >
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li class="mx-10 text-gray-400">|</li>
        <li>
          <a href="#testimoni">Testimoni</a>
        </li>
        <li class="mx-10 text-gray-400">|</li>
        <li>
          <a href="#price">Harga</a>
        </li>
        <li class="mx-10 text-gray-400">|</li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul
        class="hidden sm:flex text-gray-600 dark:text-gray-100"
        v-show="$route.name === 'gallery'"
      >
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="mx-10 text-gray-400">|</li>
        <li>
          <router-link :to="{ name: 'gallery' }" class="font-bold text-[#ffd481]"
            >Gallery</router-link
          >
        </li>
      </ul>
    </div>
    <div class="z-[60]">
      <darkMode></darkMode>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    sendRequestOpenHamburgerMenu() {
      document
        .getElementById("buttonForToggleHamburgerMenu")
        .classList.toggle("text-white");
      this.$emit("getRequestOpenHamburgerMenu");
    },
  },
};
</script>

<style>
</style>