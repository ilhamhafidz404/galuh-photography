<template>
  <nav class="p-3 flex justify-between items-center w-[90%] mx-auto">
    <div class="flex items-center">
      <img src="../assets/img/logo.png" class="w-[40px] mr-5" />
      <ul class="flex text-gray-600">
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
    </div>
    <div class="z-[60]">
      <button
        id="buttonForToggleHamburgerMenu"
        @click="sendRequestOpenHamburgerMenu()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
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