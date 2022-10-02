<template>
  <section class="fixed inset-0 bg-gray-900/80 z-[200]">
    <div class="loader h-[20px] w-[250px] absolute inset-0 m-auto">
      <div
        v-for="n in 5"
        :key="n"
        class="
          loader--dot
          h-[20px]
          w-[20px]
          rounded-full
          absolute
          border-white border-2
        "
      ></div>
      <div
        class="
          loader--text
          absolute
          top-[200%]
          left-0
          right-0
          w-[4rem]
          m-auto
          after:content-['Loading'] after:font-bold after:text-white
        "
      ></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.loader--dot {
  animation-name: loader;
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.loader--dot:first-child {
  background-color: #8cc759;
  animation-delay: 0.5s;
}
.loader--dot:nth-child(2) {
  background-color: #8c6daf;
  animation-delay: 0.4s;
}
.loader--dot:nth-child(3) {
  background-color: #ef5d74;
  animation-delay: 0.3s;
}
.loader--dot:nth-child(4) {
  background-color: #f9a74b;
  animation-delay: 0.2s;
}
.loader--dot:nth-child(5) {
  background-color: #60beeb;
  animation-delay: 0.1s;
}
.loader--dot:nth-child(6) {
  background-color: #fbef5a;
  animation-delay: 0s;
}
.loader--text::after {
  animation-name: loading-text;
  animation-iteration-count: infinite;
  animation-duration: 3s;
}

@keyframes loader {
  15% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(230px);
  }
  65% {
    transform: translateX(230px);
  }
  95% {
    transform: translateX(0);
  }
}

@keyframes loading-text {
  0% {
    content: "Loading";
  }
  25% {
    content: "Loading.";
  }
  50% {
    content: "Loading..";
  }
  75% {
    content: "Loading...";
  }
}
</style>