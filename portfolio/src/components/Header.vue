<script setup></script>

<template>
    <div id="main-header">
        <div class="flex flex-row justify-between">
            <div id="logo">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Logo" />
                </router-link>
            </div>
            <div class="nav"></div>
            <div class="btn-row flex flex-row gap-6"></div>
        </div>
    </div>
</template>

<style scoped>
#logo img {
    height: 50px;
    width: auto;
}
</style>
