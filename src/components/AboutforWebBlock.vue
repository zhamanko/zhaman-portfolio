<template>
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute opacity-40 
          top-30 left-10 w-40 h-40 
          sm:top-40 sm:left-20 
          md:top-35 md:left-40 
           lg:left-40
          scale-160 md:scale-200 ld:scale-302 xl:scale-305
          rounded-full bg-orange-400 blur-3xl">
        </div>
        <div class="absolute opacity-50 
          bottom-30 right-1 w-40 h-40 
          sm:right-20 
          md:bottom-40 md:right-50 
          lg:right-70
          scale-180 md:scale-200 ld:scale-302 xl:scale-310 
          rounded-full bg-emerald-500 blur-3xl">
        </div>
    </div>

    <div class="flex flex-col gap-5 pt-8 lg:gap-10 w-full min-h-full justify-center items-center">

        <div class="opacity-30 flex justify-center">
            <img src="/logo_text.png" alt="" class=" lg:w-3/5 grayscale">
        </div>

        <div class="relative rounded-xl border border-white/10 bg-white/2 
        backdrop-blur-xl p-7 shadow-lg lg:w-2/3">
            <p class="text-justify text-lg">{{ $t("aboutforwebText") }}</p>
        </div>

        <div class="flex flex-row grayscale opacity-40 justify-around">
            <img src="/Vue.svg" alt="" class="w-1/3">
            <img src="/tailwind.svg" alt="" class="w-1/3">
        </div>

    </div>

</template>