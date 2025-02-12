<script setup>
    import { ref } from "vue";
    
    const skills = ref([
        // Full Stack Skills
        // { name: "Full Stack Development", percentage: 90 },

        // Frontend Development
        { name: "Vue.js", percentage: 80 },
        { name: "HTML & CSS", percentage: 85 },
        { name: "Tailwind CSS", percentage: 80 },
        { name: "JavaScript (ES6+)", percentage: 85 },

        // Backend Development
        { name: "Node.js & Express.js", percentage: 75 },
        { name: "PHP & Laravel", percentage: 85 },
        { name: "Python & Django", percentage: 70 },
        { name: "C#", percentage: 70 },

        // Database & DevOps[]
        { name: "SQL & MongoDB", percentage: 80 },
        { name: "Git & GitHub", percentage: 90 },
        { name: "AWS & Firebase", percentage: 65 }
    ]);
</script>

<template>
    <section id="skill" class="-mt-20 pt-20 md:pt-28 p-6 md:px-20 py-16">
        <div class="text-center mb-10">
            <h2 class="text-4xl font-bold text-yellow-500">My Skills</h2>
            <p class="text-gray-400 mt-2">
            Here are my technical skills and expertise.
            </p>
        </div>
    
        <div data-aos="zoom-in-up" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="skill in skills" :key="skill.name">
            <div class="flex justify-between mb-1">
                <span class="text-lg">{{ skill.name }}</span>
                <span class="text-lg font-semibold">{{ skill.percentage }}%</span>
            </div>
            <div class="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div
                class="h-full bg-yellow-500 rounded-full transition-all duration-700"
                :style="{ width: skill.percentage + '%' }"
                ></div>
            </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
  /* Add extra styles if needed */
</style>