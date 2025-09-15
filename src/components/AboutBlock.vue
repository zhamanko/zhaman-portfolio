<template>
    <div class="absolute inset-0 pointer-events-none">
        <div
            class="absolute opacity-20 top-30 left-30 w-60 h-60 md:-top-20 md:-left-20 md:w-120 md:h-120 rounded-full bg-red-600 blur-3xl">
        </div>
        <div
            class="absolute opacity-40 bottom-30 right-10 w-56 h-56 md:bottom-20 md:-right-20 md:w-90 md:h-90 rounded-full bg-cyan-600 blur-3xl">
        </div>
    </div>

    <div class="flex flex-col pt-8 md:px-20 lg:px-40 xl:px-60 overflow-hidden relative">
        <div class="relative left-5 lg:static rounded-xl border border-white/20 bg-white/2 
        backdrop-blur-md p-6 shadow-lg w-3/4">
            <div class="flex flex-col gap-4">
                <h1 class="text-center text-xl">{{ $t("aboutTitle") }}</h1>
                <hr class="opacity-20">
                <p class="text-justify">{{ $t("aboutText") }}</p>
            </div>
        </div>

        <div class="flex justify-end relative -top-4 z-2">
            <div class="rounded-xl border border-white/20 bg-white/2 backdrop-blur-md shadow-lg min-w-74 w-1/2
                    lg:w-1/3">
                <img src="/about.webp" alt="" class="rounded-xl">
            </div>
        </div>

        <div class="rounded-xl border border-white/20 bg-white/2 backdrop-blur-md p-6 shadow-lg 
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
            <div class="rounded-xl border border-white/20 bg-white/2 backdrop-blur-md p-6 shadow-lg w-4/5
                    lg:w-120">
                <div class="flex flex-col gap-4">
                    <h1 class="text-center text-xl">{{ $t("educationTitle") }}</h1>
                    <hr class="opacity-20">
                    <nav class="ml-6">
                        <li>{{ $t("educationCollege") }}</li>
                        <li>{{ $t("educationUniversity") }}</li>
                    </nav>
                </div>
            </div>
        </div>


    </div>

</template>