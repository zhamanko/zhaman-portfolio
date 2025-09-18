<template>
    <div class="absolute inset-0 pointer-events-none">
        <div
            class="absolute opacity-20 top-20 -left-10 w-60 h-60 md:top-20 md:left-70 md:w-120 md:h-120 rounded-full bg-lime-600 blur-3xl">
        </div>
        <div
            class="absolute opacity-40 bottom-30 -right-15 w-56 h-56 md:bottom-20 md:right-100 md:w-90 md:h-90 rounded-full bg-rose-600 blur-3xl">
        </div>
    </div>


    <div class="relative w-full h-screen flex justify-center items-center text-white p-5">
        <div
            class="rounded-xl border border-white/20 bg-white/2 backdrop-blur-md w-full md:w-1/2 lg:w-1/3 h-2/5 p-4 shadow-lg">
            <h1 class="text-4xl leading-tight text-center font-bold py-4">
                Адмін-панель
            </h1>
            <form action="" class="flex flex-col gap-2">
                <div class="flex flex-col">
                    <label for="username" class="text-lg mb-1">Ім'я користувача:</label>
                    <input type="text" name="username" id="username"
                        class="border border-white/20 hover:border-white/40 bg-white/2 backdrop-blur-md rounded-lg px-2 py-1 transition">
                </div>
                <div class="flex flex-col">
                    <label for="password" class="text-lg mb-1">Пароль:</label>
                    <input type="password" name="password" id="password"
                        class="border border-white/20 hover:border-white/40 bg-white/2 backdrop-blur-md rounded-lg px-2 py-1">
                </div>
                <button type="submit" @mousemove="onMouseMove" @mouseleave="onMouseLeave"
                    class="relative px-6 py-3 mt-8 border border-white/20 hover:border-white/40 bg-white/2 backdrop-blur-md text-white font-bold rounded-lg overflow-hidden transition-transform duration-300"
                    :style="bgStyle" ref="btn">Увійти</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            x: 0,
            y: 0,
            hoverIntensity: 0,
            btnRect: null
        }
    },
    computed: {
        bgStyle() {
            return {
                background: `radial-gradient(circle at ${this.x}px ${this.y}px, rgba(255,255,255,${0.2 * this.hoverIntensity}), transparent 40%)`,
            }
        }
    },
    mounted() {
        this.btnRect = this.$refs.btn.getBoundingClientRect()
        window.addEventListener("mousemove", this.onMouseMove)
    },
    beforeUnmount() {
        window.removeEventListener("mousemove", this.onMouseMove)
    },
    methods: {
        onMouseMove(e) {
            const rect = this.btnRect
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2

            // координати курсора
            const mx = e.clientX
            const my = e.clientY

            // відстань від курсора до центру кнопки
            const dx = mx - cx
            const dy = my - cy
            const dist = Math.sqrt(dx * dx + dy * dy)

            // максимальна відстань, на якій кнопка реагує (пікселі)
            const maxDist = 300

            // обчислюємо інтенсивність 0-1
            this.hoverIntensity = Math.max(0, Math.min(1, 1 - dist / maxDist))

            // координати градієнту відносно кнопки
            this.x = mx - rect.left
            this.y = my - rect.top
        }
    }
}
</script>