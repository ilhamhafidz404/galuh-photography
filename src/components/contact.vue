<template>
  <section
    class="
      px-0
      md:px-5
      w-full
      sm:w-[90%]
      md:w-full
      lg:w-[90%]
      mx-auto
      mt-32
      relative
      flex
      items-center
      h-[1000px]
      sm:h-[600px]
      after:content-[''] after:absolute after:w-screen
      sm:after:w-[700px]
      md:after:w-screen
      lg:after:w-[700px]
      after:bg-cover after:bg-center after:right-0 after:h-full
      before:content-['']
      before:w-[800px]
      before:h-[90%]
      before:-translate-y-1/2
      before:bg-[#ffd481]
      before:absolute
      before:-right-10
      sm:before:top-1/2
      before:top-[330px]
      sm:before:rotate-0
      before:rotate-[5deg]
    "
    id="contact"
  >
    <div class="relative z-10">
      <h2
        class="
          mt-24
          sm:mt-0 sm:ml-0
          ml-5
          text-3xl
          sm:text-5xl
          font-semibold
          tracking-wider
          text-white
          sm:text-gray-800
          md:text-white
          lg:text-gray-800
          mb-10
          inline-flex
          items-center
          relative
          z-[1]
          after:content-['']
          after:w-[150px]
          after:h-[15px]
          after:absolute
          after:bottom-0
          after:-right-2
          after:bg-[#ffd481]
          after:-z-[1]
        "
      >
        <span
          class="
            bg-[#ffd481]
            min-w-[50px] min-h-[50px]
            max-w-[50px] max-h-[50px]
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
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </span>
        Contact Us
      </h2>
      <section
        class="
          grid grid-cols-1
          sm:grid-cols-2
          gap-5
          w-[80%]
          sm:w-[70%]
          md:w-full
          lg:w-[70%]
          mx-auto
          sm:m-0
          relative
        "
      >
        <div class="flex overflow-hidden">
          <div
            id="whatsapp"
            class="
              bg-white
              sm:py-10 sm:px-16
              py-5
              px-10
              left-0
              min-w-full
              shadow
              relative
              rounded
              text-center
              duration-500
            "
          >
            <img
              src="../assets/img/whatsapp.png"
              alt="whatsapp logo"
              class="w-[70px] mx-auto"
            />
            <h3 class="text-xl sm:text-2xl mt-5 font-semibold text-gray-800">
              Hubungi kami lewat Whatsapp
            </h3>
            <p class="mt-3 text-xs sm:text-sm text-gray-800">
              Hubungi kami lewat Whatsapp untuk membantu mengabadikan moment
              anda.
            </p>
            <button class="bg-[#4caf50] rounded text-white py-3 w-full mt-5">
              Kirim Pesan
            </button>
            <button
              id="chevron"
              class="top-1/2 right-[5px] duration-500 absolute"
              @click="slideContact(1)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="
                  w-8
                  h-8
                  text-gray-600
                  hover:w-10 hover:h-10
                  duration-300
                  hover:text-[#4caf50]
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div
            id="instagram"
            class="
              bg-white
              sm:py-10 sm:px-16
              py-5
              px-10
              left-0
              min-w-full
              shadow
              relative
              rounded
              text-center
              duration-500
            "
          >
            <button
              id="chevron"
              class="
                absolute
                top-1/2
                left-[5px]
                duration-500
                delay-200
                -translate-y-1/2
              "
              @click="slideContact(0)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="
                  w-8
                  h-8
                  text-gray-600
                  hover:w-10 hover:h-10
                  duration-300
                  hover:text-[#d0245d]
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <img
              src="../assets/img/instagram.png"
              alt="instagram logo"
              class="w-[70px] mx-auto"
            />
            <h3 class="text-xl sm:text-2xl mt-5 font-semibold text-gray-800">
              Hubungi kami lewat Instagram
            </h3>
            <p class="mt-3 text-xs sm:text-sm text-gray-800">
              Hubungi kami lewat Instagram untuk membantu mengabadikan moment
              anda.
            </p>
            <button class="bg-instagram rounded text-white py-3 w-full mt-5">
              Kirim Pesan
            </button>
            <button
              id="chevron"
              class="
                absolute
                top-1/2
                right-[5px]
                duration-500
                delay-200
                -translate-y-1/2
              "
              @click="slideContact(2)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="
                  w-8
                  h-8
                  text-gray-600
                  hover:w-10 hover:h-10
                  duration-300
                  hover:text-[#d0245d]
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div
            id="youtube"
            class="
              bg-white
              sm:py-10 sm:px-16
              py-5
              px-10
              left-0
              min-w-full
              shadow
              relative
              rounded
              text-center
              duration-500
            "
          >
            <button
              id="chevron"
              class="
                absolute
                top-1/2
                left-[5px]
                duration-500
                delay-200
                -translate-y-1/2
              "
              @click="slideContact(1)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="
                  w-8
                  h-8
                  text-gray-600
                  hover:w-10 hover:h-10
                  duration-300
                  hover:text-[#ff0101]
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <img
              src="../assets/img/youtube.png"
              alt="youtube logo"
              class="w-[70px] mx-auto"
            />
            <h3 class="text-xl sm:text-2xl mt-5 font-semibold text-gray-800">
              Ikuti kami di Youtube
            </h3>
            <p class="mt-3 text-xs sm:text-sm text-gray-800">
              Subscribe Youtube Channel kami untuk melihat kegiatan photography
              kami
            </p>
            <button class="bg-[#ff0101] rounded text-white py-3 w-full mt-5">
              Kirim Pesan
            </button>
          </div>
        </div>
        <div
          class="
            bg-white
            p-4
            shadow
            rounded
            text-center
            sm:w-auto sm:h-auto
            w-full
            h-[300px]
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1871923788576!2d108.5863402142001!3d-6.868159169106162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1b6c564928a1%3A0xb1692ca08bbacdb5!2sGaluh%20Photography!5e0!3m2!1sid!2sid!4v1663386031517!5m2!1sid!2sid"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    slideContact(content) {
      const whatsapp = document.getElementById("whatsapp");
      const instagram = document.getElementById("instagram");
      const youtube = document.getElementById("youtube");
      whatsapp.classList.remove("left-0");
      instagram.classList.remove("left-0");
      youtube.classList.remove("left-0");
      whatsapp.classList.remove("-left-full");
      instagram.classList.remove("-left-full");
      youtube.classList.remove("-left-full");
      whatsapp.classList.remove("-left-[200%]");
      instagram.classList.remove("-left-[200%]");
      youtube.classList.remove("-left-[200%]");
      if (content == 1) {
        whatsapp.classList.add("-left-full");
        instagram.classList.add("-left-full");
        youtube.classList.add("-left-full");
      } else if (content == 2) {
        whatsapp.classList.add("-left-[200%]");
        instagram.classList.add("-left-[200%]");
        youtube.classList.add("-left-[200%]");
      } else {
        whatsapp.classList.add("left-0");
        instagram.classList.add("left-0");
        youtube.classList.add("left-0");
      }
    },
  },
};
</script>

<style scoped>
#whatsapp #chevron,
#instagram #chevron,
#youtube #chevron {
  transform: scale(0) translateY(-50%);
}
#whatsapp:hover #chevron,
#instagram:hover #chevron,
#youtube:hover #chevron {
  transform: scale(1) translateY(-50%);
}
#contact::after {
  background-image: url(../assets/img/contact.jpg);
}
.bg-instagram {
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
}
</style>