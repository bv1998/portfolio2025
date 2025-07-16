<script setup>
const props = defineProps({
    projectName: {
        type: String,
        default: "Project Name",
    },
    projectType: {
        type: String,
        default: "Project Type",
    },
    projectLink: {
        type: String,
        default: "/",
    },
    projectImg: {
        type: String,
        default: "/",
    },
    projectLang: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <div :class="`project-card mx-8`" :href="projectLink">
        <p class="project-card__title">{{ projectName }}</p>
        <p class="project-card__type">{{ projectType }}</p>
        <img :src="projectImg" :alt="projectName" class="project-card__img" />
        <div class="lang-items flex flex-row justify-center">
            <template v-for="(lang, index) in projectLang" :key="index">
                <div class="lang-item">{{ lang }}</div>
                <div
                    v-if="index < projectLang.length - 1"
                    class="lang-divider"
                ></div>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project-card {
    background: $light;
    border-radius: 30px;
    overflow: hidden;
    border: 8px solid $secondary;
    padding: 15px;
    &__title {
        font-size: 32px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: $heading;
        color: $secondary;
        line-height: 1;
        margin-bottom: 0px;
    }
    &__type {
        font-size: 20px;
        font-weight: 400;
        font-style: italic;
        text-transform: uppercase;
        font-family: $altheading;
        color: $dark;
        margin-bottom: 10px;
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.lang-items {
    justify-content: center;
    margin-top: 10px;
    align-items: center;
    .lang-item {
        font-size: 20px;
        font-weight: 400;
        font-style: italic;
        text-transform: uppercase;
        font-family: $altheading;
        color: $dark;
    }
    .lang-divider {
        width: 10px;
        height: 10px;
        background-color: $secondary;
        border-radius: 50%;
        margin: 0 8px;
    }
}
</style>
