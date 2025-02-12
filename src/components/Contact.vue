<script setup>
    import { ref } from "vue";
    
    const form = ref({
        name: "",
        email: "",
        message: "",
    });
    
    const submitForm = () => {
        alert(`Message sent!\nName: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`);
        // You can replace this with an API call to send the form data
    };
</script>

<template>
    <section id="contact" class="-mt-20 pt-20 md:pt-28 p-6 md:px-20 py-16">
        <div class="text-center mb-10">
            <h2 class="text-4xl font-bold text-yellow-500">Contact Me</h2>
            <p class="text-gray-400 mt-2">Let's get in touch! Feel free to send me a message.</p>
        </div>
    
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            class="max-w-2xl mx-auto bg-gray-950 p-8 rounded-lg shadow-lg">
            <form @submit.prevent="submitForm">
            
            <!-- Name Input -->
            <div class="mb-4">
                <label for="name" class="block text-yellow-500 text-sm font-semibold mb-1">Name</label>
                <input  id="name" v-model="form.name" type="text" placeholder="Your Name" 
                class="w-full p-3 rounded-xl bg-gray-900 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
            </div>
    
            <!-- Email Input -->
            <div class="mb-4">
                <label for="email" class="block text-yellow-500 text-sm font-semibold mb-1">Email</label>
                <input id="email" v-model="form.email" type="email" placeholder="Your Email" 
                class="w-full p-3 rounded-xl bg-gray-800 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
            </div>
    
            <!-- Message Input -->
            <div class="mb-4">
                <label for="message" class="block text-yellow-500 text-sm font-semibold mb-1">Message</label>
                <textarea id="message" v-model="form.message" placeholder="Your Message" rows="5"
                class="w-full p-3 rounded-xl bg-gray-800 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
            </div>
    
            <!-- Submit Button -->
            <button type="submit" 
                class="w-full bg-yellow-500 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition">
                Send Message
            </button>
    
            </form>
        </div>
    </section>
</template>

<style scoped>
  /* Add extra styles if needed */
</style>