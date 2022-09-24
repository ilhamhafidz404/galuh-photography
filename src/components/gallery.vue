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
          after:right-[100px] after:bg-[#ffd481] after:-z-[1]
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
      <!-- <button
        id="filterButton"
        data-filter="all"
        v-if="openMoreGallery == false"
        @click="filterGalleryUsingCategoryImage()"
        class="
          border-[3px]
          hover:border-2
          duration-300
          shadow-[5px_5px_0_0px_#ffd481]
          hover:shadow-[0_0_12px_#ffd481] hover:bg-[#ffd481]
          border-gray-700
          hover:border-transparent
          px-5
          py-2
          text-gray-700
          hover:text-white
          mr-5
        "
      >
        Lihat Selengkapnya
      </button>
      <div v-else class="mt-10 sm:mt-0 sm:block flex justify-center">
        <button
          id="filterButton"
          data-filter="all"
          @click="filterGalleryUsingCategoryImage()"
          class="
            border-[3px]
            hover:border-2
            duration-300
            shadow-[5px_5px_0_0px_#ffd481]
            hover:shadow-[0_0_12px_#ffd481] hover:bg-[#ffd481]
            border-gray-700
            hover:border-transparent
            px-5
            py-2
            text-gray-700
            hover:text-white
            mr-5
          "
        >
          All
        </button>
        <button
          id="filterButton"
          data-filter="outdoor"
          @click="filterGalleryUsingCategoryImage()"
          class="
            border-[3px]
            hover:border-2
            duration-300
            shadow-[5px_5px_0_0px_#ffd481]
            hover:shadow-[0_0_12px_#ffd481] hover:bg-[#ffd481]
            border-gray-700
            hover:border-transparent
            px-5
            py-2
            text-gray-700
            hover:text-white
            mr-5
          "
        >
          Outdoor
        </button>
        <button
          id="filterButton"
          data-filter="indoor"
          @click="filterGalleryUsingCategoryImage()"
          class="
            border-[3px]
            hover:border-2
            duration-300
            shadow-[5px_5px_0_0px_#ffd481]
            hover:shadow-[0_0_12px_#ffd481] hover:bg-[#ffd481]
            border-gray-700
            hover:border-transparent
            px-5
            py-2
            text-gray-700
            hover:text-white
          "
        >
          Indoor
        </button>
      </div> -->
    </div>
    <figure class="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-5">
      <div class="row-span-2 overflow-hidden">
        <div
          class="
            bg-white
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
            href="/src/assets/img/gallery/potrait1.jpg"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/potrait1.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
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
          data-item="indoor"
        >
          <a
            href="/src/assets/img/gallery/landscape1.jpg"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/landscape1.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
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
            href="/src/assets/img/gallery/landscape2.jpg"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/landscape2.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
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
            href="/src/assets/img/gallery/landscape3.jpg"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/landscape3.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden row-span-2">
        <div
          class="
            bg-white
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
            href="/src/assets/img/gallery/potrait2.jpg"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/potrait2.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
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
            href="/src/assets/img/gallery/landscape4.jpg"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/landscape4.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="
            bg-white
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
            href="/src/assets/img/gallery/landscape5.jpg"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/landscape5.jpg"
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
              href="/src/assets/img/gallery/landscape6.jpg"
              data-lightbox="gallery"
              data-title="My caption"
            >
              <img
                class="h-full object-cover"
                src="../assets/img/gallery/landscape6.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="overflow-hidden">
          <div
            class="
              bg-white
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
              href="/src/assets/img/gallery/landscape6.jpg"
              data-lightbox="gallery"
              data-title="My caption"
            >
              <img
                class="h-full object-cover"
                src="../assets/img/gallery/landscape6.jpg"
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
            href="/src/assets/img/gallery/potrait4.jpg"
            data-lightbox="gallery"
            data-title="My caption"
          >
            <img
              class="object-center h-full object-cover w-full"
              src="../assets/img/gallery/potrait4.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="overflow-hidden row-span-2">
        <div
          class="
            bg-white
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
            href="/src/assets/img/gallery/potrait5.jpg"
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      openMoreGallery: false,
    };
  },
  methods: {
    // seeMoreGallery() {
    //   document.querySelectorAll("#group2").forEach((gallery) => {
    //     gallery.classList.remove("hidden");
    //   });
    //   document.querySelector("#buttonForSeeMore").classList.add("hidden");
    //   document.querySelector("#buttonForSeeLess").classList.remove("hidden");
    //   document.querySelector("#buttonForSeeLess").classList.add("block");
    // },
    // seeLessGallery() {
    //   document.querySelectorAll("#group2").forEach((gallery) => {
    //     gallery.classList.add("hidden");
    //   });
    //   document.querySelector("#buttonForSeeMore").classList.remove("hidden");
    //   document.querySelector("#buttonForSeeLess").classList.add("hidden");
    // },
    filterGalleryUsingCategoryImage() {
      this.openMoreGallery = true;
      let list = document.querySelectorAll("#filterButton");
      let itemBox = document.querySelectorAll(".itemBox");

      for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
          for (let j = 0; j < list.length; j++) {
            list[j].classList.add("border-[3px]");
            list[j].classList.add("shadow-[5px_5px_0_0px_#ffd481]");
            list[j].classList.add("border-gray-700");
            list[j].classList.remove("border-2");
            list[j].classList.remove("shadow-[0_0_12px_#ffd481]");
            list[j].classList.remove("border-transparent");
            list[j].classList.remove("text-white");
            list[j].classList.remove("bg-[#ffd481]");
          }
          this.classList.remove("border-[3px]");
          this.classList.remove("shadow-[5px_5px_0_0px_#ffd481]");
          this.classList.remove("border-gray-700");
          this.classList.add("border-2");
          this.classList.add("shadow-[0_0_12px_#ffd481]");
          this.classList.add("border-transparent");
          this.classList.add("text-white");
          this.classList.add("bg-[#ffd481]");

          let dataFilter = this.getAttribute("data-filter");

          for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.add("hidden");

            if (
              itemBox[k].getAttribute("data-item") == dataFilter ||
              dataFilter == "all"
            ) {
              itemBox[k].classList.remove("hidden");
            }
          }
        });
      }
    },
  },
};
</script>

<style scoped>
</style>