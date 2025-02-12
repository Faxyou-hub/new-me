<script setup>
  import Home from './components/Home.vue';
  import About from './components/About.vue';
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import Skill from './components/Skill.vue';
  import Contact from './components/Contact.vue';
  import Work from './components/Work.vue';

</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div class="font-fira bg-gray-900 text-white">
    <header>
      <Header class="fixed w-full top-0 z-50"/>
    </header>
    <main class="overflow-x-hidden">
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
</style>