<script>
export default {
    data() {
        return {
            activeSection: 'home'
        };
    },
    mounted() {
        this.initObserver();
    },
    beforeUnmount() {
        if (this.observer) this.observer.disconnect();
    },
    methods: {
        scrollTo(id) {
            const el = document.getElementById(id);
            const container = this.$refs.main;
            if (!el) return;
            if (container) {
                container.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
            } else {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        },
        initObserver() {
            const root = this.$refs.main || null;
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.activeSection = entry.target.id;
                    }
                });
            }, { root, threshold: 0.55 });

            const sections = (this.$refs.main || document).querySelectorAll('section');
            sections.forEach(s => this.observer.observe(s));
        },
        changeLang(lang) {
            this.$i18n.locale = this.$i18n.locale === "ua" ? "en" : "ua";
            localStorage.setItem('lang', this.$i18n.locale )
        }
    }
}
</script>

<template>

    <header class="fixed z-20 bottom-2 left-2 right-2 lg:top-2 lg:left-auto flex flex-row-reverse  lg:flex-col justify-center items-center text-white border
  border-white/20 bg-white/2 backdrop-blur-md px-2 py-2 rounded-lg">
        <div class="flex-1 flex justify-end">
            <transition name="lang-fade" mode="out-in">
                <button :key="$i18n.locale" @click="changeLang"
                    class="p-1 h-8 text-base text-white transform transition-all ease-in-out
                    opacity-70 hover:opacity-100 ">
                    {{ $i18n.locale.toUpperCase() }}
                </button>
            </transition>
        </div>
        <div>
            <nav class="flex flex-row lg:flex-col items-center gap-5">
                <a href="#home" @click.prevent="scrollTo('home')"
                    :class="activeSection === 'home' ? 'opacity-100' : 'opacity-60'" class="hover:scale-130 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                        stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </a>
                <a href="#about" @click.prevent="scrollTo('about')"
                    :class="activeSection === 'about' ? 'opacity-100' : 'opacity-60'"
                    class="hover:scale-130 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                        stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </a>
                <a href="#portfolio" @click.prevent="scrollTo('portfolio')"
                    :class="activeSection === 'portfolio' ? 'opacity-100' : 'opacity-60'"
                    class="hover:scale-130 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                        stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                    </svg>
                </a>
                <a href="#aboutforweb" @click.prevent="scrollTo('aboutforweb')"
                    :class="activeSection === 'aboutforweb' ? 'opacity-100' : 'opacity-60'"
                    class="hover:scale-130 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </a>
            </nav>
        </div>
        <div class="flex-1"></div>
        <div>
            <nav class="hidden lg:flex flex-col gap-2">
                <a href="#instagram">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white opacity-65 hover:opacity-100 transition"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                        viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="#GitHub">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white opacity-65 hover:opacity-100 transition"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </nav>
        </div>
    </header>

</template>

<style scoped>
.lang-fade-enter-active,
.lang-fade-leave-active {
    transition: all 0.3s ease;
}

.lang-fade-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.lang-fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>