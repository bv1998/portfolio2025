<script setup>
const props = defineProps({
    buttonText: {
        type: String,
        default: "Button",
    },
    buttonLink: {
        type: String,
        default: "/",
    },
    buttonStyle: {
        type: String,
        default: "main",
        validator: (value) => ["main", "light"].includes(value),
    },
});
</script>

<template>
    <a
        :class="`btn btn--${buttonStyle}`"
        :href="buttonLink"
        :target="buttonLink.startsWith('#') ? '' : '_blank'"
        :rel="buttonLink.startsWith('#') ? '' : 'noopener noreferrer'"
    >
        {{ buttonText }} <i class="fa-solid fa-arrow-right"></i>
    </a>
</template>

<style scoped lang="scss">
.btn {
    padding: 7px 3px;
    border-radius: 0px;
    font-family: $heading;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    i {
        padding-left: 21px;
        // font-size: 24px;
    }
    color: $dark;
    position: relative;
    line-height: 1;
    &::after {
        content: "";
        width: 40%;
        height: 3px;
        bottom: 0;
        left: 0;
        background: $dark;
        position: absolute;
        transition: all 0.4s ease;
    }
    &:hover {
        &::after {
            width: 100%;
        }
    }
    &.btn--light {
        color: $light;
        &::after {
            background: $light;
        }
    }
}
</style>
