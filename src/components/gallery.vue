<template>
  <section id="overflow-gallery">
    <div
      id="gallery1"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[80%]
          md:max-w-[500px]
          h-[500px]
          md:h-[600px] md:max-h-[600px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/potrait1.jpg"
          alt=""
        />
        <a href="#gallery2" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery2"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[90%]
          md:w-[580px]
          lg:max-w-[900px]
          h-[300px]
          md:h-[500px]
          max-h-[500px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery1" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/landscape1.jpg"
          alt=""
        />
        <a
          href="#gallery3"
          class="
            absolute
            bottom-[-70px]
            left-[50px]
            -translate-y-1/2
            text-white
          "
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery3"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[90%]
          md:w-[580px]
          lg:max-w-[900px]
          h-[300px]
          md:h-[500px]
          max-h-[500px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery2" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/landscape2.jpg"
          alt=""
        />
        <a
          href="#gallery4"
          class="absolute bottom-[-50px] left-[50px] text-white"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery4"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[90%]
          md:w-[580px]
          lg:max-w-[900px]
          h-[300px]
          md:h-[500px]
          max-h-[500px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery3" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/landscape3.jpg"
          alt=""
        />
        <a
          href="#gallery5"
          class="absolute bottom-[-50px] left-[50px] text-white"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery5"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[80%]
          md:max-w-[500px]
          h-[500px]
          md:h-[600px] md:max-h-[600px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery4" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/potrait2.jpg"
          alt=""
        />
        <a
          href="#gallery6"
          class="absolute bottom-[-50px] left-[50px] text-white"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery6"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[90%]
          md:w-[580px]
          lg:max-w-[900px]
          h-[300px]
          md:h-[500px]
          max-h-[500px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery5" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/landscape4.jpg"
          alt=""
        />
        <a
          href="#gallery7"
          class="absolute bottom-[-50px] left-[50px] text-white"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery7"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[90%]
          md:w-[580px]
          lg:max-w-[900px]
          h-[300px]
          md:h-[500px]
          max-h-[500px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery6" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/landscape5.jpg"
          alt=""
        />
        <a
          href="#gallery8"
          class="absolute bottom-[-50px] left-[50px] text-white"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery8"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[90%]
          md:w-[580px]
          lg:max-w-[900px]
          h-[300px]
          md:h-[500px]
          max-h-[500px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery7" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/landscape6.jpg"
          alt=""
        />
        <a
          href="#gallery9"
          class="absolute bottom-[-50px] left-[50px] text-white"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery9"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[90%]
          md:w-[580px]
          lg:max-w-[900px]
          h-[300px]
          md:h-[500px]
          max-h-[500px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery8" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/landscape6.jpg"
          alt=""
        />
        <a
          href="#gallery10"
          class="absolute bottom-[-50px] left-[50px] text-white"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery10"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[80%]
          md:max-w-[500px]
          h-[500px]
          md:h-[600px] md:max-h-[600px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute bottom-[-50px] right-0 text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery9" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/potrait4.jpg"
          alt=""
        />
        <a
          href="#gallery11"
          class="absolute bottom-[-50px] left-[50px] text-white"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      id="gallery11"
      class="fixed hidden target:block target:inset-0 bg-black/80 z-[500]"
    >
      <div
        class="
          bg-white
          w-[80%]
          md:max-w-[500px]
          h-[500px]
          md:h-[600px] md:max-h-[600px]
          p-1
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded
        "
      >
        <a href="#gallery" class="absolute -right-[50px] text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <!--  -->
        <a href="#gallery10" class="absolute bottom-[-50px] left-0 text-white">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <img
          class="object-center h-full object-cover w-full"
          src="../assets/img/gallery/potrait5.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
  <section id="gallery" class="w-[90%] mx-auto mt-32">
    <div class="block sm:flex items-center justify-between mb-10">
      <h2
        class="
          dark:text-white
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
    </div>
    <figure class="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-5">
      <div class="row-span-2 overflow-hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700
            w-full
            max-h-[300px]
            md:max-h-max
            p-1
            sm:p-2
            border
            dark:border-slate-700
            rounded
            itemBox
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a href="#gallery1">
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
            dark:bg-slate-700
            w-full
            p-1
            sm:p-2
            max-h-[150px]
            md:max-h-max
            border
            dark:border-slate-700
            overflow-hidden
            rounded
            itemBox
          "
        >
          <a href="#gallery2">
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
            dark:bg-slate-700
            w-full
            p-1
            sm:p-2
            border
            dark:border-slate-700
            rounded
            max-h-[150px]
            md:max-h-max
            overflow-hidden
            itemBox
          "
          data-item="indoor"
        >
          <a href="#gallery3">
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
            dark:bg-slate-700
            w-full
            p-1
            sm:p-2
            border
            dark:border-slate-700
            rounded
            itemBox
            max-h-[150px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a href="#gallery4">
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
            dark:bg-slate-700
            w-full
            p-1
            sm:p-2
            border
            dark:border-slate-700
            rounded
            itemBox
            max-h-[300px]
            md:max-h-max
            overflow-hidden
          "
          data-item="indoor"
        >
          <a href="#gallery5">
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
            dark:bg-slate-700
            w-full
            p-1
            sm:p-2
            border
            dark:border-slate-700
            rounded
            itemBox
            max-h-[150px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a href="#gallery6">
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
            dark:bg-slate-700
            w-full
            p-1
            sm:p-2
            border
            dark:border-slate-700
            rounded
            itemBox
            max-h-[150px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a href="#gallery7">
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
              dark:bg-slate-700
              w-full
              p-1
              sm:p-2
              border
              dark:border-slate-700
              rounded
              itemBox
              max-h-[150px]
              md:max-h-max
              overflow-hidden
            "
            data-item="indoor"
          >
            <a href="#gallery8">
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
              dark:bg-slate-700
              w-full
              p-1
              sm:p-2
              border
              dark:border-slate-700
              rounded
              itemBox
              max-h-[150px]
              md:max-h-max
            "
            data-item="indoor"
          >
            <a href="#gallery9">
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
            dark:bg-slate-700
            w-full
            p-1
            sm:p-2
            border
            dark:border-slate-700
            rounded
            itemBox
            max-h-[300px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a href="#gallery10">
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
            dark:bg-slate-700
            w-full
            p-1
            sm:p-2
            border
            dark:border-slate-700
            rounded
            itemBox
            max-h-[300px]
            md:max-h-max
            overflow-hidden
          "
          data-item="outdoor"
        >
          <a href="#gallery11">
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
};
</script>

<style scoped>
</style>