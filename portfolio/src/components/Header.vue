<script setup>
import Button from "./Button.vue";
</script>

<template>
    <div id="main-header" class="xxl:px-0 px-10">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div id="logo">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Logo" />
                </router-link>
            </div>
            <div class="nav"></div>
            <div
                class="btn-row flex flex-col md:flex-row gap-6 md:gap-14 md:mt-0 mt-10"
            >
                <Button
                    buttonLink="https://www.linkedin.com/in/bryan-vernon"
                    buttonText="See LinkedIn"
                    buttonStyle="main"
                />
                <Button
                    buttonLink="#contactForm"
                    buttonText="Contact Bryan"
                    buttonStyle="main"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
#logo img {
    height: 50px;
    width: auto;
}
</style>
