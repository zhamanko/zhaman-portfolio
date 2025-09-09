<template>
    <div class="absolute inset-0 pointer-events-none">
        <div
            class="absolute opacity-20 top-30 left-30 w-60 h-60 md:-top-20 md:-left-20 md:w-120 md:h-120 rounded-full bg-red-600 blur-3xl">
        </div>
        <div
            class="absolute opacity-40 bottom-30 right-10 w-56 h-56 md:bottom-20 md:-right-20 md:w-90 md:h-90 rounded-full bg-cyan-600 blur-3xl">
        </div>
    </div>

    <div class="flex flex-col">
        <div class="relative rounded-xl border border-white/20 bg-white/2 
        backdrop-blur-md p-6 md:p-12 shadow-lg w-3/4 left-5">
            <div class="flex flex-col gap-4">
                <h1 class="text-center text-xl">About me</h1>
                <hr class="opacity-20">
                <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Placeat alias, qui sit est molestias delectus provident assumenda fugiat minima, adipisci quaerat?
                    Error enim modi iure. Animi ut facere cum? Voluptate?</p>
            </div>
        </div>

        <div class="flex flex-col-reverse justify-end">
            <div class="flex justify-end">
                <div
                    class="relative -top-12 z-5 rounded-xl border border-white/20 bg-white/2 backdrop-blur-md p-6 md:p-12 shadow-lg w-3/4">
                    <div class="flex flex-col gap-4">
                        <h1 class="text-center text-xl">Education</h1>
                        <hr class="opacity-20">
                        <nav>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        </nav>
                    </div>
                </div>
            </div>

            <div
                class="relative -top-8 rounded-xl border border-white/20 bg-white/2 backdrop-blur-md p-6 md:p-12 shadow-lg w-3/4">
                <div class="flex flex-col gap-4">
                    <h1 class="text-center text-xl">Soft skill</h1>
                    <hr class="opacity-20">
                    <nav>
                        <li>HTMl</li>
                        <li>CSS</li>
                        <li>JavaScritp</li>
                        <li>Tailwind css</li>
                        <li>Vue.js</li>
                        <li>PHP</li>
                    </nav>
                    <p class="mt-4 text-sm opacity-70">
                        Також маю базові знання: Python, SQL, Node.js.
                    </p>
                </div>
            </div>


            <div class="flex justify-end">
                <div
                    class="relative -top-4 rounded-xl border border-white/20 bg-white/2 backdrop-blur-md  shadow-lg min-w-74 w-3/6">
                    <img src="/about.png" alt="" class="rounded-xl">
                </div>
            </div>

        </div>
    </div>

</template>