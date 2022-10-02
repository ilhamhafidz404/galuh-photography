<template>
  <header class="grid grid-cols-1 sm:grid-cols-5 gap-10 mt-14 w-[90%] mx-auto">
    <div
      class="
        sm:hidden
        block
        rotate-[5deg]
        bg-[#ffd481]
        absolute
        left-1/2
        -translate-x-1/2
        w-[800px]
      "
    >
      <img
        src="../assets/img/galuh2.jpg"
        class="
          -rotate-[5deg]
          w-[200px]
          top-[-30px]
          h-[300px]
          object-cover
          right-[-30px]
          mx-auto
          rounded
        "
      />
    </div>
    <div class="col-span-3 sm:mt-0 mt-[330px]">
      <h1
        class="
          text-5xl
          md:text-7xl
          font-semibold
          tracking-wider
          sm:leading-[60px]
          md:leading-[80px]
          lg:leading-[100px]
          text-center
          sm:text-left
          text-gray-800
          dark:text-white/90
        "
      >
        Capture <br />
        Your
        <span
          class="
            relative
            sm:before:content-['']
            sm:before:absolute
            sm:before:top-0
            sm:before:left-[-5%]
            sm:before:w-[110%]
            sm:before:h-full
            sm:before:border-4
            sm:before:border-[#ffd481]
            sm:before:rounded-[100%]
            after:content-[''] after:block
            sm:after:hidden
            after:absolute
            after:top-0
            after:left-[-5%]
            after:w-[110%]
            after:h-[15px]
            after:bg-[#ffd481]
            after:mt-[30px]
            after:z-[-10]
          "
          >Beautiful</span
        >
        <br />
        Moments
      </h1>
      <hr class="border border-gray-800 my-10" />
      <section class="grid lg:grid-cols-2 grid-cols-1 gap-7">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9 dark:text-white/90"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
            />
          </svg>

          <h3 class="text-xl font-semibold mt-3 mb-2 dark:text-white/90">
            Outdoor dan Studio Photo
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-200">
            Solo ? Duo atau Family Photo juga bisa. Tersedia dengan berbagai
            background photo. Juga dapat dibantu untuk mendapat pose yang bagus.
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9 dark:text-white/90"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>

          <h3 class="text-xl font-semibold mt-3 mb-2 dark:text-white/90">
            Fotografer Moments
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-200">
            Sudah menerima banyak client dari berbagai kota untuk membantu
            mengabadikan momen Pernikahan, Kelulusan ataupun Family Photo.
          </p>
        </div>
      </section>
    </div>
    <div class="hidden sm:block col-span-2 bg-[#ffd481] relative">
      <img
        src="../assets/img/galuh2.jpg"
        class="
          w-[400px]
          top-[-30px]
          h-[600px]
          object-cover
          right-[-30px]
          absolute
          rounded
        "
      />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>