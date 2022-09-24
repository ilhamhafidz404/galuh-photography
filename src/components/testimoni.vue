<template>
  <section
    id="testimoni"
    class="
      text-gray-800
      grid grid-cols-1
      xl:grid-cols-5
      mt-52
      h-[500px]
      md:h-[950px]
      lg:h-[750px]
      xl:h-[450px]
      gap-10
      py-5
      px-0
      sm:px-20 sm:py-20
      bg-cover bg-center
      relative
      before:content-[''] before:w-[600px]
      sm:before:w-[400px]
      before:h-[110%]
      lg:before:h-[120%]
      before:-z-[1]
      before:absolute
      before:-left-[100px]
      before:rotate-[10deg]
      before:bg-[#ffd481]
      before:-top-[50px]
      after:content-['']
      after:w-full
      after:h-full
      after:bg-gray-800/70
      after:z-[1]
      after:absolute
    "
  >
    <div class="col-span-2 relative z-10 text-white">
      <h2
        class="
          sm:text-left
          text-center text-3xl
          sm:text-5xl
          font-semibold
          tracking-wider
          mb-10
          flex
          items-center
          relative
          z-[1]
          after:content-['']
          after:w-[100px]
          after:h-[15px]
          after:absolute
          after:bottom-0
          after:left-[100px]
          after:bg-[#ffd481]
          after:-z-[1]
        "
      >
        <span
          class="
            sm:ml-0
            ml-5
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
            class="sm:w-9 sm:h-9 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </span>
        Testimoni
      </h2>
      <p
        class="
          sm:text-left sm:text-base
          text-sm
          sm:mt-0
          -mt-5
          text-center
          ml-5
          w-full
        "
      >
        Telah banyak client yang kami tangani dan banyak dari mereka puas dengan
        pelayanan yang kami sajikan. Ini adalah beberapa testimoni dari
        banyaknya kesan positif dari client untuk kami.
      </p>
    </div>
    <div
      class="
        grid
        sm:grid-cols-2
        grid-cols-1
        col-span-3
        -mt-16
        sm:mt-7
        md:mt-0
        xl:-mt-24
        relative
        z-10
        gap-10
      "
    >
      <div class="relative w-[80%] mx-auto sm:m-0 sm:w-full">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:text-white
            sm:p-5
            p-3
            rounded
            shadow
          "
        >
          <div class="absolute left-[-25px]">
            <img src="../assets/img/user.png" class="w-[50px]" />
          </div>
          <h4 class="text-xl font-semibold tracking-wider sm:ml-5 ml-7">
            Ilham Hafidz
          </h4>
          <h5 class="text-sm text-gray-500 dark:text-gray-300 sm:ml-5 ml-7">
            Pakt Wedding & Pre-Wedding
          </h5>
          <p class="sm:text-sm text-[13px] mt-5">
            Mantaaaaap, hasil jepretan-nya sangat bagus dan saya sangat puas.
            Saya memilih paket untuk proses Wedding dan Pre-wedding saya dan
            hasil-nya memang sangat memukau. Terimakasih Galuh Photography.
          </p>
          <div
            class="
              absolute
              -top-[20px]
              right-[20px]
              rounded-full
              flex
              items-center
              justify-center
              bg-[#ffd481]
              w-[40px]
              h-[40px]
            "
          >
            <img src="../assets/img/quote.png" class="w-[50%]" />
          </div>
        </div>
      </div>
      <div class="relative sm:block hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:text-white
            sm:p-5
            p-1
            rounded
            shadow
            absolute
            bottom-0
          "
        >
          <div class="absolute left-[-25px]">
            <img src="../assets/img/user.png" class="w-[50px]" />
          </div>
          <h4 class="text-xl font-semibold tracking-wider ml-5">
            Imam Al-Fathah
          </h4>
          <h5 class="text-sm text-gray-500 dark:text-gray-300 ml-5">
            Paket Group
          </h5>
          <p class="text-sm mt-5">
            Hasil jepretannya sangat bagus, pelayanan dan para photographer nya
            juga ramah-ramah.
          </p>
          <div
            class="
              absolute
              -top-[20px]
              right-[20px]
              rounded-full
              flex
              items-center
              justify-center
              bg-[#ffd481]
              w-[40px]
              h-[40px]
            "
          >
            <img src="../assets/img/quote.png" class="w-[50%]" />
          </div>
        </div>
      </div>
      <div class="relative md:block hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:text-white
            sm:p-5
            p-1
            rounded
            shadow
          "
        >
          <div class="absolute left-[-25px]">
            <img src="../assets/img/user.png" class="w-[50px]" />
          </div>
          <h4 class="text-xl font-semibold tracking-wider ml-5">Ian Andira</h4>
          <h5 class="text-sm text-gray-500 dark:text-gray-300 ml-5">
            Paket Family
          </h5>
          <p class="text-sm mt-5">
            Harga di setiap paketnya saya rasa sudah sangat cukup murah untuk
            hasil jepretan yang bagus seperti ini.
          </p>
          <div
            class="
              absolute
              -top-[20px]
              right-[20px]
              rounded-full
              flex
              items-center
              justify-center
              bg-[#ffd481]
              w-[40px]
              h-[40px]
            "
          >
            <img src="../assets/img/quote.png" class="w-[50%]" />
          </div>
        </div>
      </div>
      <div class="relative md:block hidden">
        <div
          class="
            bg-white
            dark:bg-slate-700 dark:text-white
            sm:p-5
            p-1
            rounded
            shadow
            w-[90%]
          "
        >
          <div class="absolute left-[-25px]">
            <img src="../assets/img/user.png" class="w-[50px]" />
          </div>
          <h4 class="text-xl font-semibold tracking-wider ml-5">
            Agran Pujiana
          </h4>
          <h5 class="text-sm text-gray-500 dark:text-gray-300 ml-5">
            Paket Wedding
          </h5>
          <p class="text-sm mt-5">
            Terimakasih Tim dari Galuh Photography sudah membantu menyukseskan
            acara pernikahan saya. Hasil foto-fotonya sangat bagus, dengan foto
            album yang sangat rapih dan baik juga. Pelayanan dari
            photographernya juga sangat ramah dan baik.
          </p>
          <div
            class="
              absolute
              -top-[20px]
              right-[60px]
              rounded-full
              flex
              items-center
              justify-center
              bg-[#ffd481]
              w-[40px]
              h-[40px]
            "
          >
            <img src="../assets/img/quote.png" class="w-[50%]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#testimoni {
  background-image: url(../assets/img/testimoni.jpg);
}
</style>