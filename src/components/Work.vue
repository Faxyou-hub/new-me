<script setup>
    import { ref } from "vue";
    
    const projects = ref([
        { title: "Portfolio Website", description: "A modern portfolio built with Vue and Tailwind.", image: "/src/assets/work.png", link: "#" },
        { title: "E-Commerce App", description: "An online store with a smooth UI and secure checkout.", image: "/src/assets/work.png", link: "#" },
        { title: "Business Landing Page", description: "A high-converting landing page for businesses.", image: "/src/assets/work.png", link: "#" },
        { title: "Social Media App", description: "A mobile-friendly social media application.", image: "/src/assets/work.png", link: "#" },
        { title: "CMS Dashboard", description: "An admin panel for content management systems.", image: "/src/assets/work.png", link: "#" },
        { title: "SEO Analytics Tool", description: "A tool for tracking website performance.", image: "/src/assets/work.png", link: "#" }
    ]);
</script>

<template>
    <section id="work" class="-mt-20 pt-20 md:pt-28 p-6 md:px-20 py-16">
        <div class="text-center mb-10">
            <h2 class="text-4xl font-bold text-yellow-500">My Work</h2>
            <p class="mt-2">Some of my recent projects.</p>
        </div>
    
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(project, index) in projects.slice(0, 6)" :key="index" class="bg-gray-950 p-5 rounded-lg shadow-lg">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded-md">
            <h3 class="text-xl font-semibold mt-3">{{ project.title }}</h3>
            <p class="text-sm mt-1">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="mt-3 inline-block text-yellow-500 font-semibold hover:underline">
                View Project →
            </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
  /* Add extra styles if needed */
</style>