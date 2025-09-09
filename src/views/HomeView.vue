<script>
import Header from '@/components/Header.vue';
import MainBlock from '@/components/MainBlock.vue';
import AboutBlock from '@/components/AboutBlock.vue';

export default {
  name: 'HomeView',
  components: { Header, MainBlock, AboutBlock },
}
</script>

<template>

  <Header/>

  <main ref="main" class="h-screen min-w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
    <!-- main block -->
    <section id="home" class="relative bg-gray-950 h-screen flex items-center 
    justify-center text-white snap-start overflow-x-hidden">
      <MainBlock/>
    </section>


    <!-- about block -->
    <section id="about" class="relative bg-gray-950 h-screen
     text-white snap-start overflow-x-hidden p-2 pb-17 lg:pl-17 lg:pb-2">
      <AboutBlock/>
    </section>

    <!-- portfolio -->
    <section id="portfolio" class="h-screen flex items-center justify-center bg-blue-600 text-white snap-start">
      <h3 class="text-2xl">portfolio</h3>
    </section>
  </main>
</template>
