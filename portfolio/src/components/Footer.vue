<script setup>
import Button from "./Button.vue";
</script>

<template>
    <div id="main-footer">
        <div class="flex flex-row justify-between">
            <div id="logo">
                <router-link to="/">
                    <img src="../assets/footer-logo.png" alt="Logo" />
                </router-link>
            </div>
            <div class="nav"></div>
            <div class="btn-row flex flex-row gap-14">
                <Button
                    buttonLink="/"
                    buttonText="Download CV"
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
