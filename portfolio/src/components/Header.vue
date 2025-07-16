<script setup>
import Button from "./Button.vue";
</script>

<template>
    <div id="main-header">
        <div class="flex flex-row justify-between">
            <div id="logo">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Logo" />
                </router-link>
            </div>
            <div class="nav"></div>
            <div class="btn-row flex flex-row gap-14">
                <Button
                    buttonLink="/"
                    buttonText="Download CV"
                    buttonStyle="main"
                />
                <Button
                    buttonLink="/"
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
