<template>
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute opacity-40 
          top-30 left-10 w-40 h-40 
          sm:top-40 sm:left-20 
          md:top-35 md:left-40 
           lg:left-40
          scale-160 md:scale-200 ld:scale-302 xl:scale-305
          rounded-full bg-cyan-600 blur-3xl">
        </div>
        <div class="absolute opacity-50 
          bottom-30 right-1 w-40 h-40 
          sm:right-20 
          md:bottom-40 md:right-50 
          lg:right-70
          scale-180 md:scale-200 ld:scale-302 xl:scale-310 
          rounded-full bg-red-500 blur-3xl">
        </div>
    </div>

    <div class="flex flex-col pt-8 md:px-20 lg:px-40 xl:px-60 overflow-hidden relative">
        <div class="relative left-5 lg:static rounded-xl border border-white/10 bg-white/2 
        backdrop-blur-xl p-6 shadow-lg w-3/4">
            <div class="flex flex-col gap-4">
                <h1 class="text-center text-xl">{{ $t("aboutTitle") }}</h1>
                <hr class="opacity-20">
                <p class="text-justify">{{ $t("aboutText") }}</p>
            </div>
        </div>

        <div class="flex justify-end relative -top-4 z-2">
            <div class="rounded-xl border border-white/10 bg-white/2 backdrop-blur-md shadow-lg min-w-74 w-1/2
                    lg:w-1/3">
                <img src="/about.webp" alt="" class="rounded-xl opacity-80">
            </div>
        </div>

        <div class="rounded-xl border border-white/10 bg-white/2 backdrop-blur-xl p-6 shadow-lg 
                w-3/4 relative -top-9">
            <div class="flex flex-col gap-4">
                <h1 class="text-center text-xl">{{ $t("softTitle") }}</h1>
                <hr class="opacity-20">
                <nav class="ml-6">
                    <li>HTMl</li>
                    <li>CSS</li>
                    <li>JavaScritp</li>
                    <li>Tailwind css</li>
                    <li>Vue.js</li>
                    <li>PHP</li>
                </nav>
                <p class="mt-4 text-sm opacity-70">
                    {{ $t("softText") }}: Java, Python, SQL, Node.js.
                </p>
            </div>
        </div>

        <div class="flex justify-end relative -top-12 right-4 lg:right-12">
            <div class="rounded-xl border border-white/10 bg-white/2 backdrop-blur-xl p-6 shadow-lg w-4/5
                    lg:w-120">
                <div class="flex flex-col gap-4">
                    <h1 class="text-center text-xl">{{ $t("educationTitle") }}</h1>
                    <hr class="opacity-20">
                    <nav class="ml-6">
                        <li><strong>{{ $t("educationJunior") }}</strong> {{ $t("educationCollege") }}</li>
                        <li><strong>{{ $t("educationBachelor") }}</strong> {{ $t("educationUniversity") }}</li>
                    </nav>
                </div>
            </div>
        </div>


    </div>

</template>