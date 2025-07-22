<script setup>
import Button from "./Button.vue";
</script>

<template>
    <div id="main-footer" class="xxl:px-0 px-10">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div id="logo">
                <router-link to="/">
                    <img src="../assets/footer-logo.png" alt="Logo" />
                </router-link>
            </div>
            <div
                class="btn-row flex flex-col md:flex-row gap-6 md:gap-14 md:mt-0 mt-10"
            >
                <Button
                    buttonLink="https://www.linkedin.com/in/bryan-vernon"
                    buttonText="See LinkedIn"
                    buttonStyle="light"
                />
                <Button
                    buttonLink="/"
                    buttonText="Contact Bryan"
                    buttonStyle="light"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#main-footer {
    padding: 80px 15px 67px;
    position: relative;
    &::after {
        content: "";
        width: 100vw;
        height: 100%;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: $secondary;
        position: absolute;
        z-index: -1;
    }

    #logo img {
        height: 50px;
        width: auto;
    }
}
</style>
