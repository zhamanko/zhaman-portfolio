<script>
export default {
    data() {
        return {
            Vission: false,
            projects:
                [
                    { id: "1", name: "project-one", description: "-", img: "/photo.png", tehnologia: ["Vue.js", "Tailwind"] }
                ],
        }
    }
}
</script>

<template>
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute opacity-20 top-10 left-10 w-60 h-60 md:w-96 md:h-96 rounded-full bg-lime-500 blur-3xl">
        </div>
        <div class="absolute opacity-30 bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 rounded-full bg-rose-500 blur-3xl">
        </div>
    </div>

    <div class="relative w-full flex flex-col gap-3 text-white p-5">
        <div
            class="flex flex-row justify-between rounded-xl border border-white/20 bg-white/2 backdrop-blur-md w-full h-20 p-4 shadow-lg">
            <h1 class="text-4xl leading-tight font-bold">
                Адмін-панель
            </h1>
            <div class="flex gap-4">
                <button
                    class="border border-white/20 bg-white/2 backdrop-blur-md px-8 rounded-xl text-lg hover:scale-105 transition hover:border-white/40"
                    @click="this.Vission = true">
                    Додати новий проєкт</button>
                <button
                    class="border border-white/20 bg-white/2 backdrop-blur-md px-8 rounded-xl text-lg hover:scale-105 transition hover:border-white/40">Вихід</button>
            </div>
        </div>

        <div
            class="flex flex-row justify-between rounded-xl border border-white/20 bg-white/2 backdrop-blur-md w-full p-4 shadow-lg">
            <div class="overflow-x-auto w-full">
                <table class="min-w-full text-white text-center">
                    <thead>
                        <tr class="border-b border-white/20">
                            <th class="px-4 py-2">Ід</th>
                            <th class="px-4 py-2">Ім'я</th>
                            <th class="px-4 py-2">Опис</th>
                            <th class="px-4 py-2">Технології</th>
                            <th class="px-4 py-2">Фото</th>
                            <th class="px-4 py-2">Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="project in projects" :key="project.id" class="border-b border-white/20">
                            <td class="px-4 py-2">{{ project.id }}</td>
                            <td class="px-4 py-2">{{ project.name }}</td>
                            <td class="px-4 py-2 max-w-40 text-justify">{{ project.description }}</td>
                            <td class="px-4 py-2">{{ project.tehnologia.join(", ") }}</td>
                            <td class="px-4 py-2">{{ project.img }}</td>
                            <td class="px-4 py-2 flex gap-2 justify-center items-center">
                                <button
                                    class="border border-white/20 bg-white/2 backdrop-blur-md px-4 py-1 rounded-lg text-md hover:scale-105 transition hover:border-white/40">Редагувати</button>
                                <button
                                    class="border border-white/20 bg-white/2 backdrop-blur-md px-4 py-1 rounded-lg text-md hover:scale-105 transition hover:border-white/40">Видалити</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="absolute top-0 left-0 flex justify-center items-center bg-black/60 overflow-hidden h-screen w-screen text-white px-4"
        :class="this.Vission === false ? 'hidden' : 'block'" @click="this.Vission = false">
        <div class="rounded-xl border border-white/20 bg-white/2 backdrop-blur-md w-full p-4 shadow-lg" @click.stop>
            <div class="flex">
                <h1 class="flex-1 text-2xl leading-tight font-bold text-center">
                    Додати новий проєкт
                </h1>
                <button @click="this.Vission = false">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <form action="" class="mt-5 text-lg">
                <div class="flex flex-col">
                    <label for="">Назва проєкта</label>
                    <input type="text" name="" id=""
                        class="border border-white/20 hover:border-white/40 bg-white/2 backdrop-blur-md rounded-lg px-2 py-1 transition">
                </div>
                <div class="flex flex-col">
                    <label for="">Опис</label>
                    <input type="text" name="" id=""
                        class="border border-white/20 hover:border-white/40 bg-white/2 backdrop-blur-md rounded-lg px-2 py-1 transition">
                </div>
                <div class="flex flex-col">
                    <label for="">Технології</label>
                    <input type="text" name="" id=""
                        class="border border-white/20 hover:border-white/40 bg-white/2 backdrop-blur-md rounded-lg px-2 py-1 transition">
                </div>
                <div class="flex flex-col">
                    <label for="">Фото</label>
                    <input type="file" multiple name="" id=""
                        class="border border-white/20 hover:border-white/40 bg-white/2 backdrop-blur-md rounded-lg px-2 py-1 transition">
                </div>
                <button class="border border-white/20 bg-white/2 backdrop-blur-md px-8 
                rounded-xl text-lg transition hover:border-white/40 w-full py-4 mt-10">Додати</button>
            </form>
        </div>
    </div>
</template>