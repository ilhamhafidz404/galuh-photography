<template>
  <section id="gallery" class="w-[90%] mx-auto mt-32">
    <div class="flex items-center justify-between">
      <h2
        class="
          text-5xl
          font-semibold
          tracking-wider
          mb-10
          flex
          items-center
          relative
          z-[1]
          after:content-['']
          after:w-[300px]
          after:h-[15px]
          after:absolute
          after:bottom-0
          after:right-0
          after:bg-[#ffd481]
          after:-z-[1]
        "
      >
        <span
          class="
            bg-[#ffd481]
            w-[50px]
            h-[50px]
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
            class="w-9 h-9"
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
      <div>
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
      </div>
    </div>
    <figure class="grid grid-cols-3 gap-5">
      <div class="bg-white p-2 border rounded itemBox" data-item="outdoor">
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div class="bg-white p-2 border rounded itemBox" data-item="indoor">
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div class="bg-white p-2 border rounded itemBox" data-item="indoor">
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div class="bg-white p-2 border rounded itemBox" data-item="outdoor">
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div class="bg-white p-2 border rounded itemBox" data-item="indoor">
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div class="bg-white p-2 border rounded itemBox" data-item="indoor">
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div
        id="group2"
        class="hidden bg-white p-2 border rounded itemBox"
        data-item="outdoor"
      >
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div
        id="group2"
        class="hidden bg-white p-2 border rounded itemBox"
        data-item="indoor"
      >
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div
        id="group2"
        class="hidden bg-white p-2 border rounded itemBox"
        data-item="indoor"
      >
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div
        id="group2"
        class="hidden bg-white p-2 border rounded itemBox"
        data-item="outdoor"
      >
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div
        id="group2"
        class="hidden bg-white p-2 border rounded itemBox"
        data-item="outdoor"
      >
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
      <div
        id="group2"
        class="hidden bg-white p-2 border rounded itemBox"
        data-item="indoor"
      >
        <a
          href="/src/assets/img/contact.jpg"
          data-lightbox="gallery"
          data-title="My caption"
        >
          <img src="../assets/img/contact.jpg" alt="" />
        </a>
      </div>
    </figure>
    <button
      @click="seeMoreGallery()"
      id="buttonForSeeMore"
      class="mx-auto mt-10 block bg-[#ffd481] py-2 px-5 rounded text-white"
    >
      Lihat lebih lengkap
    </button>
    <button
      @click="seeLessGallery()"
      id="buttonForSeeLess"
      class="mx-auto mt-10 hidden bg-[#ffd481] py-2 px-5 rounded text-white"
    >
      <a href="#gallery"> Lihat lebih sedikit </a>
    </button>
  </section>
</template>

<script>
export default {
  methods: {
    seeMoreGallery() {
      document.querySelectorAll("#group2").forEach((gallery) => {
        gallery.classList.remove("hidden");
      });
      document.querySelector("#buttonForSeeMore").classList.add("hidden");
      document.querySelector("#buttonForSeeLess").classList.remove("hidden");
      document.querySelector("#buttonForSeeLess").classList.add("block");
    },
    seeLessGallery() {
      document.querySelectorAll("#group2").forEach((gallery) => {
        gallery.classList.add("hidden");
      });
      document.querySelector("#buttonForSeeMore").classList.remove("hidden");
      document.querySelector("#buttonForSeeLess").classList.add("hidden");
    },
    filterGalleryUsingCategoryImage() {
      let list = document.querySelectorAll("#filterButton");
      let itemBox = document.querySelectorAll(".itemBox");

      for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
          for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("active");
          }
          this.classList.add("active");

          let dataFilter = this.getAttribute("data-filter");

          for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove("active");
            itemBox[k].classList.add("hidden");

            if (
              itemBox[k].getAttribute("data-item") == dataFilter ||
              dataFilter == "all"
            ) {
              itemBox[k].classList.add("active");
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