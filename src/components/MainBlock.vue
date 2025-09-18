<template>
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute opacity-40 
          top-30 left-10 w-40 h-40 
          sm:top-40 sm:left-20 
          md:top-35 md:left-40 
           lg:left-40
          scale-160 md:scale-200 ld:scale-302 xl:scale-305
          rounded-full bg-purple-600 blur-3xl">
    </div>
    <div class="absolute opacity-50 
          bottom-30 right-1 w-40 h-40 
          sm:right-20 
          md:bottom-40 md:right-50 
          lg:right-70
          scale-180 md:scale-200 ld:scale-302 xl:scale-310 
          rounded-full bg-purple-600 blur-3xl">
    </div>
  </div>


  <div class="relative rounded-xl border border-white/10 bg-white/2 backdrop-blur-xl p-6 md:p-12 shadow-lg">
    <h1 class="text-4xl md:text-6xl leading-tight text-center text-white font-bold">
      {{ $t("helloName") }}<br />
      <span class="text-purple-400">{{ $t("job") }}</span>
    </h1>
  </div>
</template>