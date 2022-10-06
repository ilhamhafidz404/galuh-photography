<template>
  <section id="gallery" class="w-[90%] mx-auto mt-32">
    <div class="block sm:flex items-center justify-between mb-10">
      <h2
        class="
          text-3xl
          sm:text-5xl
          font-semibold
          tracking-wider
          inline-flex
          sm:flex
          items-center
          relative
          z-[1]
          after:content-[''] after:w-[150px]
          sm:after:w-[300px]
          after:h-[15px] after:absolute after:bottom-0
          sm:after:right-0
          md:after:right-[100px]
          xl:after:right-0
          after:right-[100px] after:bg-[#ffd481] after:-z-[1]
          dark:text-white/90
        "
      >
        <span
          class="
            bg-[#ffd481]
            w-[40px]
            h-[40px]
            min-w-[40px] min-h-[40px]
            sm:w-[50px] sm:h-[50px] sm:min-w-[50px] sm:min-h-[50px]
            rounded-full
            flex
            items-center
            justify-center
            mr-3
            text-[#fdf9f2]
            shadow
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="sm:w-9 sm:h-9 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </span>
        Gallery Photography
      </h2>
      <router-link
        :to="{ name: 'gallery' }"
        class="
          text-center
          whitespace-nowrap
          md:inline
          hidden
          border-[3px]
          hover:border-2
          duration-300
          shadow-[5px_5px_0_0px_#ffd481]
          hover:shadow-[0_0_12px_#ffd481] hover:bg-[#ffd481]
          border-gray-700
          dark:border-white
          hover:border-transparent
          dark:hover:border-transparent
          px-5
          py-2
          text-gray-700
          hover:text-white
          dark:text-white/90
          mr-5
        "
      >
        Lihat Lebih Lengkap
      </router-link>
    </div>
    <figure class="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-5">
      <div class="row-span-2 overflow-hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:border-0
            w-full
            max-h-[300px]
            md:max-h-max
            p-1
            sm:p-2
            border
            rounded
            itemBox
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/potrait1.jpg?alt=media&token=073efb5b-e91b-4a6f-8112-9712dc420fd1"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/thumbs/potrait1.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:border-0
            w-full
            p-1
            sm:p-2
            max-h-[150px]
            md:max-h-max
            border
            overflow-hidden
            rounded
            itemBox
          "
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/landscape1.jpg?alt=media&token=3876f79a-a8e3-423a-bbc8-6c3dc76b2c9c"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/thumbs/landscape1.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:border-0
            w-full
            p-1
            sm:p-2
            border
            rounded
            max-h-[150px]
            md:max-h-max
            overflow-hidden
            itemBox
          "
          data-item="indoor"
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/landscape2.jpg?alt=media&token=a86d4685-4f67-49b7-8205-17740ca401c0"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/thumbs/landscape2.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:border-0
            w-full
            p-1
            sm:p-2
            border
            rounded
            itemBox
            max-h-[150px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/landscape3.jpg?alt=media&token=348fe172-035d-4dff-9576-09181b3c8f98"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/thumbs/landscape3.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden row-span-2">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:border-0
            w-full
            p-1
            sm:p-2
            border
            rounded
            itemBox
            max-h-[300px]
            md:max-h-max
            overflow-hidden
          "
          data-item="indoor"
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/potrait2.jpg?alt=media&token=15cb7549-41de-400b-a054-044f146646d3"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/thumbs/potrait2.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:border-0
            w-full
            p-1
            sm:p-2
            border
            rounded
            itemBox
            max-h-[150px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/landscape4.jpg?alt=media&token=c4a4c040-c181-46bd-b668-0eba3a60fdd9"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/thumbs/landscape4.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:border-0
            w-full
            p-1
            sm:p-2
            border
            rounded
            itemBox
            max-h-[150px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/landscape5.jpg?alt=media&token=3212dd0d-445a-4320-8b66-7c5262d04ba5"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/thumbs/landscape5.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="hidden sm:grid grid-row-1 sm:grid-row-2 gap-5">
        <div class="overflow-hidden">
          <div
            class="
              bg-white
              dark:bg-slate-700 dark:border-0
              w-full
              p-1
              sm:p-2
              border
              rounded
              itemBox
              max-h-[150px]
              md:max-h-max
              overflow-hidden
            "
            data-item="indoor"
          >
            <a
              href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/landscape6.jpg?alt=media&token=ec2b65f2-b372-43bf-8422-713d72cffa59"
              data-lightbox="gallery"
              data-title="My caption"
            >
              <img
                class="h-full object-cover"
                src="../assets/img/gallery/thumbs/landscape6.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="overflow-hidden">
          <div
            class="
              bg-white
              dark:bg-slate-700 dark:border-0
              w-full
              p-1
              sm:p-2
              border
              rounded
              itemBox
              max-h-[150px]
              md:max-h-max
            "
            data-item="indoor"
          >
            <a
              href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/landscape6.jpg?alt=media&token=ec2b65f2-b372-43bf-8422-713d72cffa59"
              data-lightbox="image-1"
              data-title="My caption"
            >
              <img
                class="h-full object-cover"
                src="../assets/img/gallery/thumbs/landscape6.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div class="overflow-hidden row-span-2">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:border-0
            w-full
            p-1
            sm:p-2
            border
            rounded
            itemBox
            max-h-[300px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/potrait4.jpg?alt=media&token=e687dac1-ebe3-4777-b571-5da129ad2455"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/thumbs/potrait4.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden row-span-2">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:border-0
            w-full
            p-1
            sm:p-2
            border
            rounded
            itemBox
            max-h-[300px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/galuh-photography.appspot.com/o/potrait5.jpg?alt=media&token=73cbe2a1-556a-4b80-81f3-acfc02ffaaff"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/potrait5.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </figure>
    <router-link
      :to="{ name: 'gallery' }"
      class="
        md:hidden
        inline-block
        w-full
        text-center
        mt-10
        border-[3px]
        hover:border-2
        duration-300
        shadow-[5px_5px_0_0px_#ffd481]
        hover:shadow-[0_0_12px_#ffd481] hover:bg-[#ffd481]
        border-gray-700
        dark:border-white
        hover:border-transparent
        dark:hover:border-transparent
        px-5
        py-2
        text-gray-700
        hover:text-white
        dark:text-white/90
        mr-5
      "
    >
      Lihat Lebih Lengkap
    </router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      openMoreGallery: false,
    };
  },
};
</script>

<style scoped>
</style>