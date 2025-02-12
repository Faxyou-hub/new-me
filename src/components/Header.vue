<script>
    // import { ref, onMounted, onUnmounted } from "vue";

    // export default {
    // setup() {
    //     const activeSection = ref("");
    //     const sections = ["home", "about", "skill", "work", "contact"];
    //     const isScrolled = ref(false);

    //     const sectionNames = {
    //     home: "Home",
    //     about: "About Me",
    //     skill: "Skills",
    //     work: "Works",
    //     contact: "Contact",
    //     };

    //     const handleScroll = () => {
    //     requestAnimationFrame(() => {
    //         const scrollPosition = window.scrollY + window.innerHeight / 3;
    //         sections.forEach((section) => {
    //         const element = document.getElementById(section);
    //         if (
    //             element &&
    //             scrollPosition >= element.offsetTop &&
    //             scrollPosition < element.offsetTop + element.offsetHeight
    //         ) {
    //             activeSection.value = section;
    //         }
    //         });

    //         isScrolled.value = window.scrollY > 20;
    //     });
    //     };

    //     onMounted(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     handleScroll();
    //     });

    //     onUnmounted(() => {
    //     window.removeEventListener("scroll", handleScroll);
    //     });

    //     return { activeSection, sections, sectionNames, isScrolled };
    // },
    // };
    import { ref, onMounted, onUnmounted } from "vue";

    export default {
        setup() {
            const activeSection = ref("");
            const sections = ["home", "about", "skill", "work", "contact"];
            const isScrolled = ref(false);
            const isMobileMenuOpen = ref(false);

            const sectionNames = {
                home: "Home",
                about: "About Me",
                skill: "Skills",
                work: "Works",
                contact: "Contact",
            };

            const handleScroll = () => {
                requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY + window.innerHeight / 3;
                    sections.forEach((section) => {
                        const element = document.getElementById(section);
                        if (
                            element &&
                            scrollPosition >= element.offsetTop &&
                            scrollPosition < element.offsetTop + element.offsetHeight
                        ) {
                            activeSection.value = section;
                        }
                    });

                    isScrolled.value = window.scrollY > 20;
                });
            };

            const toggleMobileMenu = () => {
                isMobileMenuOpen.value = !isMobileMenuOpen.value;
            };

            onMounted(() => {
                window.addEventListener("scroll", handleScroll);
                handleScroll();
            });

            onUnmounted(() => {
                window.removeEventListener("scroll", handleScroll);
            });

            return { activeSection, sections, sectionNames, isScrolled, isMobileMenuOpen, toggleMobileMenu };
        },
    };
</script>

<template>
    <!-- <div class="hidden md:flex items-center justify-between uppercase px-10 md:px-20 h-20 bg-gray-950 bg-opacity-95 text-white">
        <div>
            <img src="@/assets/logo.png" class="h-14 rounded-full" alt="">
        </div>
        <nav class="flex items-center gap-10">
            <a
                v-for="section in sections"
                :key="section"
                :href="'#' + section"
                class="relative group transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 py-1 after:bg-yellow-400 after:transition-all after:duration-400 md:hover:after:w-full"
                :class="{ 'after:w-full': activeSection === section }"
                @click="activeSection = section"
            >
                {{ sectionNames[section] }}
            </a>
        </nav>
    </div> -->
    <!-- Navbar -->
    <div class="fixed w-full top-0 left-0 z-50 bg-gray-950 bg-opacity-95 text-white">
        <div class="flex items-center justify-between px-6 md:px-20 h-16">
            <!-- Logo -->
            <div>
                <img src="@/assets/logo.png" class="h-12 rounded-full" alt="Logo">
            </div>

            <!-- Desktop Menu -->
            <nav class="hidden md:flex items-center gap-10">
                <a
                    v-for="section in sections"
                    :key="section"
                    :href="'#' + section"
                    class="relative group transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 py-1 after:bg-yellow-400 after:transition-all after:duration-400 hover:after:w-full"
                    :class="{ 'after:w-full': activeSection === section }"
                    @click="activeSection = section"
                >
                    {{ sectionNames[section] }}
                </a>
            </nav>

            <!-- Mobile Menu Button -->
            <button @click="toggleMobileMenu" class="md:hidden text-yellow-400 focus:outline-none">
                <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z" clip-rule="evenodd"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden fixed w-full flex flex-col transition-all duration-500 bg-gray-950 bg-opacity-95 py-4 px-8 space-y-4"
            :class="{ 'translate-x-0 opacity-100': isMobileMenuOpen, '-translate-x-full opacity-0': !isMobileMenuOpen }"
            >
            <a
                v-for="section in sections"
                :key="section"
                :href="'#' + section"
                    class="relative group transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 py-1 after:bg-yellow-400 after:transition-all after:duration-400 hover:after:w-full"
                    :class="{ 'after:w-full': activeSection === section }"
                @click="toggleMobileMenu"
            >
                {{ sectionNames[section] }}
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>