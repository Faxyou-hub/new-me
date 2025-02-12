<script setup>

</script>

<template>
    <section id="about" class="-mt-20 pt-10 md:pt-28 p-6 md:px-20 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            class="flex justify-center">
                <img src="@/assets/me.png" alt="Profile Picture" class="border-8 hidden md:block border-yellow-500 h-96 rounded-3xl" />
            </div>

            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h2 class="text-4xl font-bold text-yellow-500 mb-2">About Me</h2>
                <p class="text-gray-400 mb-6">
                A small river named Duden flows by their place and supplies it with the necessary regalia.
                </p>

                <ul class="space-y-2 text-gray-300">
                <li><strong class="text-white">Name:</strong> Phit Sofa</li>
                <li><strong class="text-white">Date of Birth:</strong> March, 03, 2005</li>
                <li><strong class="text-white">Address:</strong> Sangkat Steung Mean Chey, Khan Meanchey, Phnom Penh, Cambodia</li>
                <li><strong class="text-white">Zip Code:</strong> 12352</li>
                <li><strong class="text-white">Email:</strong> vansofa709@gmail.com</li>
                <li><strong class="text-white">Phone:</strong> +855 99705577</li>
                </ul>

                <p class="mt-6 text-yellow-500 text-lg font-semibold">73 <span class="text-white">Project Complete</span></p>

                <a href="#" class="mt-4 inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
                Download CV
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>