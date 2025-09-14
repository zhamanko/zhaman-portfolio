<script>
export default {
  name: "PortfolioBlock",
  data() {
    return {
      currentIndex: 0,
      itemsPerPage: 2,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      projects: [
        { id: 1, name: "Project-one", year: 2025, img: "./project-one.png", tehnologia: ["Vue.js", "Tailwind", "Swiper.js"] },
        { id: 2, name: "Project-two", year: 2024, img: "./project-one.png", tehnologia: ["Vue.js", "Pinia", "Tailwind"] },
        { id: 3, name: "Project-three", year: 2024, img: "./project-one.png", tehnologia: ["Vue.js", "Pinia", "Tailwind"] },
        { id: 4, name: "Project-four", year: 2023, img: "./project-one.png", tehnologia: ["Vue.js", "Tailwind"] },
        { id: 5, name: "Project-five", year: 2022, img: "./project-one.png", tehnologia: ["Vue.js", "Tailwind", "Pinia"] },
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

    <h1 class="text-center text-4xl mt-10 mb-7">My projects</h1>

  <div
    class="relative w-full overflow-hidden"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <!-- Слайдер -->
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(group, gIndex) in groupedProjects"
        :key="gIndex"
        class="flex-shrink-0 w-full flex flex-col gap-6 px-4"
      >
        <div
          v-for="project in group"
          :key="project.id"
          class="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-4 shadow-lg"
        >
          <img :src="project.img" alt="" class="rounded w-full  object-cover" />
          <div class="flex justify-between opacity-70 mt-3 px-2">
            <p>{{ project.id.toString().padStart(2, "0") }}</p>
            <p>{{ project.year }}</p>
          </div>
          <h1 class="text-xl lg:text-2xl mt-4 ml-4">{{ project.name }}</h1>
          <div class="flex flex-wrap gap-2 opacity-70 justify-end mt-4">
            <p
              v-for="tech in project.tehnologia"
              :key="tech"
              class="bg-white/10 border border-white/30 py-1 px-3 rounded-full text-sm"
            >
              {{ tech }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Кнопки -->
    <button
      @click="prev"
      :disabled="currentIndex === 0"
      class="absolute top-1/2 left-2 -translate-y-1/2 bg-white/10 border border-white/30 rounded-full px-3 py-2 disabled:opacity-30"
    >
      ←
    </button>
    <button
      @click="next"
      :disabled="currentIndex === totalSlides - 1"
      class="absolute top-1/2 right-2 -translate-y-1/2 bg-white/10 border border-white/30 rounded-full px-3 py-2 disabled:opacity-30"
    >
      →
    </button>

    <!-- Пагінація -->
    <div class="flex justify-center mt-4 gap-2">
      <span
        v-for="(p, i) in totalSlides"
        :key="i"
        class="w-3 h-3 rounded-full"
        :class="i === currentIndex ? 'bg-purple-600' : 'bg-white/30'"
      ></span>
    </div>
  </div>
</template>
