<template>
  <header class="grid grid-cols-5 gap-10 mt-14 w-[90%] mx-auto">
    <div class="col-span-3">
      <h1
        class="
          text-7xl
          font-semibold
          tracking-wider
          leading-[100px]
          text-gray-800
        "
      >
        Create Your
        <br />
        <span
          class="
            relative
            before:content-['']
            before:absolute
            before:left-[-5%]
            before:w-[110%]
            before:h-full
            before:border-4
            before:border-[#ffd481]
            before:rounded-[100%]
          "
          >Beautiful</span
        >
        <br />
        Photography
      </h1>
      <hr class="border border-gray-800 my-10" />
      <section class="flex gap-7">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <h3 class="text-xl font-semibold mt-3 mb-2">Amazing Builder</h3>
          <p class="text-sm text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            saepe maxime omnis soluta?
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <h3 class="text-xl font-semibold mt-3 mb-2">Amazing Builder</h3>
          <p class="text-sm text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            saepe maxime omnis soluta?
          </p>
        </div>
      </section>
    </div>
    <div class="col-span-2 bg-[#ffd481] relative">
      <img
        src="../assets/img/header.jpg"
        class="w-[400px] top-[-30px] right-[-30px] absolute rounded"
      />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>