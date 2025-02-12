<template>
    <section id="home" class="-mt-10 pt-32 md:pt-40 p-6 md:px-20 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full">
            <!-- Left Section: Text -->
            <div class="text-center md:text-left">
                <p class="text-yellow-500 uppercase tracking-wide text-sm md:text-base">Hello!</p>
                <h1 class="text-4xl md:text-6xl font-bold leading-tight">
                    I'm <span class="text-yellow-500">Phit</span> <br />
                    <span class="text-yellow-500">Sofa</span>
                </h1>
                <p class="text-lg text-gray-300 mt-3">Fullstack Web Developer</p>

                <div class="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <a href="#about" class="bg-yellow-500 px-6 py-3 rounded-full border-2 border-yellow-500 font-semibold text-center hover:scale-105 transition-all duration-300">
                    About Me
                    </a>
                    <a href="#work" class="text-yellow-500 px-6 py-3 rounded-full border-2 border-yellow-500 font-semibold text-center hover:bg-yellow-500 hover:text-white hover:scale-105 transition-all duration-300">
                    My Works
                    </a>
                </div>
            </div>

            <!-- Right Section: Profile Picture -->
            <div class="flex justify-center mt-10 md:mt-0">
                <img src="@/assets/me.png" alt="Profile Picture" class="h-96 md:w-auto border-8 border-yellow-500 rounded-3xl shadow-lg object-cover" />
            </div>
        </div>
    </section>
</template>
