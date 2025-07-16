<script setup>
const icons = [
    "fa-brands fa-html5",
    "fa-brands fa-css3-alt",
    "fa-brands fa-js",
    "fa-brands fa-vuejs",
    "fa-brands fa-react",
    "fa-brands fa-node-js",
    "fa-brands fa-php",
    "fa-brands fa-laravel",
    "fa-brands fa-aws",
    "fa-brands fa-docker",
    "fa-brands fa-git",
    "fa-brands fa-python",
    "fa-solid fa-gem",
    "fa-brands fa-wordpress",
    "fa-brands fa-angular",
    "fa-brands fa-npm",
];
</script>

<template>
    <div class="grid-container">
        <div class="grid">
            <div v-for="(icon, index) in icons" :key="index" class="grid-item">
                <i :class="icon"></i>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.grid-container {
    width: 100%;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
}

.grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

i {
    color: $light;
    font-size: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
