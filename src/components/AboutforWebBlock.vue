<template>
    <div class="absolute inset-0 pointer-events-none">
        <div
            class="absolute opacity-20 top-30 left-30 w-60 h-60 md:-top-20 md:-left-20 md:w-120 md:h-120 rounded-full bg-blue-600 blur-3xl">
        </div>
        <div
            class="absolute opacity-40 bottom-30 right-10 w-56 h-56 md:bottom-20 md:-right-20 md:w-90 md:h-90 rounded-full bg-pink-600 blur-3xl">
        </div>
    </div>

    <div class="flex flex-col gap-5 pt-8 lg:gap-10 w-full min-h-full justify-center items-center">

        <div class="opacity-30 flex justify-center">
            <img src="/logo_text.png" alt="" class=" lg:w-3/5 grayscale">
        </div>

        <div class="relative rounded-xl border border-white/20 bg-white/2 
        backdrop-blur-md p-7 shadow-lg lg:w-2/3">
            <p class="text-justify text-lg">{{ $t("aboutforwebText") }}</p>
        </div>

        <div class="flex flex-row grayscale opacity-40 justify-around">
            <img src="/Vue.svg" alt="" class="w-1/3">
            <img src="/tailwind.svg" alt="" class="w-1/3">
        </div>

    </div>

</template>