<script>
export default {
  name: "PortfolioBlock",
  data() {
    return {
      currentIndex: 0,
      itemsPerPage: 3,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      projects: [
        { id: 1, name: "Project-one", year: 2025, img: "./project-one.png", tehnologia: ["Vue.js", "Tailwind", "Swiper.js"] },
        { id: 2, name: "Project-two", year: 2024, img: "./project-one.png", tehnologia: ["Vue.js", "Pinia", "Tailwind"] },
        { id: 3, name: "Project-three", year: 2024, img: "./project-one.png", tehnologia: ["Vue.js", "Pinia", "Tailwind"] },
        { id: 4, name: "Project-four", year: 2023, img: "./project-one.png", tehnologia: ["Vue.js", "Tailwind"] },
        { id: 5, name: "Project-five", year: 2022, img: "./project-one.png", tehnologia: ["Vue.js", "Tailwind", "Pinia"] }
      ],
    };
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.projects.length / this.itemsPerPage);
    },
    groupedProjects() {
      let groups = [];
      for (let i = 0; i < this.projects.length; i += this.itemsPerPage) {
        groups.push(this.projects.slice(i, i + this.itemsPerPage));
      }
      return groups;
    },
    visibleDots() {
      if (this.totalSlides <= 3) {
        return [...Array(this.totalSlides).keys()];
      }
      // завжди центруємо
      let start = this.currentIndex - 1;
      let end = this.currentIndex + 1;

      if (start < 0) {
        start = 0;
        end = 2;
      } else if (end > this.totalSlides - 1) {
        end = this.totalSlides - 1;
        start = this.totalSlides - 3;
      }

      return Array.from({ length: 3 }, (_, idx) => start + idx);
    },
  },
  methods: {
    next() {
      if (this.currentIndex < this.totalSlides - 1) this.currentIndex++;
    },
    prev() {
      if (this.currentIndex > 0) this.currentIndex--;
    },
    handleTouchStart(e) {
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
    },
    handleTouchEnd(e) {
      this.endX = e.changedTouches[0].clientX;
      this.endY = e.changedTouches[0].clientY;

      const diffX = this.startX - this.endX;
      const diffY = this.startY - this.endY;

      // 👉 свайп тільки якщо по X більше ніж по Y (щоб не конфліктувало зі скролом)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) this.next(); // свайп вліво
        else this.prev(); // свайп вправо
      }
    },
  },
};
</script>

<template>

  <div class="absolute inset-0 pointer-events-none">
        <div class="absolute opacity-40 
          top-30 right-10 w-40 h-40 
          sm:top-40 sm:right-20 
          md:top-35 md:right-40 
           lg:right-70
          scale-160 md:scale-200 ld:scale-302 xl:scale-305
          rounded-full bg-indigo-600 blur-3xl">
        </div>
        <div class="absolute opacity-50 
          bottom-30 right-1 w-40 h-40 
          sm:left-20 
          md:bottom-40 md:left-50
          lg:left-20
          scale-180 md:scale-200 ld:scale-302 xl:scale-310 
          rounded-full bg-lime-800 blur-3xl">
        </div>
    </div>

  <div class="flex flex-col overflow-hidden relative">

    <h1 class="text-center text-4xl mt-5 mb-5">{{ $t("projectTitile") }}</h1>

    <div class="relative w-full overflow-hidden" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
      <!-- Слайдер -->
      <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(group, gIndex) in groupedProjects" :key="gIndex"
          class="flex-shrink-0 w-full flex flex-col gap-8 pt-6">
          <div v-for="project in group" :key="project.id" class="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-lg
          lg:flex lg:flex-row lg:gap-10">
            <img :src="project.img" alt="" class="relative -top-10 rounded w-full object-cover lg:w-1/3" />

            <div class="w-full lg:flex lg:flex-col lg:justify-around lg:pr-10">
              <div class="flex justify-between opacity-70 px-2">
                <p>{{ project.id.toString().padStart(2, "0") }}</p>
                <p>{{ project.year }}</p>
              </div>
              <div class="">
                <h1 class="my-2 text-2xl lg:text-3xl">{{ project.name }}</h1>
                <div class="flex justify-end gap-2">
                  <p v-for="tech in project.tehnologia" :key="tech"
                    class=" opacity-70 py-1 px-2 rounded-full text-sm lg:text-base">
                    {{ tech }}
                  </p>
                </div>
              </div>
              <div class="flex mt-5 gap-2 justify-center">
                <button class="bg-white/8 border border-white/15 py-1 px-3 rounded-full text-md lg:text-base hover:bg-white/12">Деталі</button>
                <button class="bg-white/8 border border-white/15 py-1 px-3 rounded-full text-md lg:text-base hover:bg-white/12">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Пагінація -->
      <div class="flex justify-center items-center mt-4 gap-4">
        <!-- prev -->
        <button @click="prev" class="bg-white/8 border border-white/10 rounded-full px-3 py-2 pointer-events-auto">
          ←
        </button>

        <!-- pagination carousel -->
        <transition-group name="dot" tag="div" class="flex gap-2 justify-center items-center overflow-hidden w-24">
          <button v-for="i in visibleDots" :key="i" @click="currentIndex = i"
            class="w-3 h-3 rounded-full pointer-events-auto transform transition-all duration-300 ease-in-out" :class="i === currentIndex
              ? 'bg-indigo-600/60 shadow-lg shadow-purple-500/30 w-4 h-4'
              : 'bg-white/20 hover:bg-white/50 scale-100'"></button>
        </transition-group>

        <!-- next -->
        <button @click="next" class="bg-white/8 border border-white/10 rounded-full px-3 py-2 pointer-events-auto">
          →
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* анімація для transition-group */
.dot-enter-active,
.dot-leave-active {
  transition: all 0.3s ease;
}

.dot-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.8);
}

.dot-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.8);
}
</style>