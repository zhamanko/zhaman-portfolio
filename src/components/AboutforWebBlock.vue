<template>
    <div class="absolute inset-0 pointer-events-none">
        <div
            class="absolute opacity-20 top-30 left-30 w-60 h-60 md:-top-20 md:-left-20 md:w-120 md:h-120 rounded-full bg-green-600 blur-3xl">
        </div>
        <div
            class="absolute opacity-40 bottom-30 right-10 w-56 h-56 md:bottom-20 md:-right-20 md:w-90 md:h-90 rounded-full bg-purple-600 blur-3xl">
        </div>
    </div>

    <div class="flex flex-col gap-5 pt-8 lg:gap-10 w-full min-h-full justify-center items-center">

        <div class="opacity-30 flex justify-center">
            <img src="/logo_text.png" alt="" class=" lg:w-3/5 grayscale">
        </div>

        <div class="relative rounded-xl border border-white/20 bg-white/2 
        backdrop-blur-md p-7 shadow-lg lg:w-2/3">
            <p class="text-justify text-lg">Мій персональний сайт-портфоліо — це проект, створений для того, щоб об’єднати інформацію про мене, мої
                навички та проекти в одному сучасному та зручному просторі. Основна мета цього сайту — не лише
                представити мої роботи, а й показати вміння створювати якісні веб-рішення з акцентом на дизайн та
                користувацький досвід.

                При розробці я використав HTML, CSS, Tailwind CSS та Vue.js, що дозволило зробити сайт адаптивним,
                швидким та стильним. Завдяки цьому він коректно відображається на різних пристроях, має сучасний
                мінімалістичний інтерфейс та легку навігацію.

                Цей проект став чудовою можливістю продемонструвати мої навички у front-end розробці, а також
                реалізувати власні ідеї у створенні портфоліо. У майбутньому я планую розширювати його, додаючи нові
                секції та інтегруючи більше прикладів робіт із GitHub.</p>
        </div>

        <div class="flex flex-row grayscale opacity-40 justify-around">
            <img src="/Vue.svg" alt="" class="w-1/3">
            <img src="/tailwind.svg" alt="" class="w-1/3">
        </div>

    </div>

</template>