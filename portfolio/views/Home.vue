<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";
import Languages from "../src/components/Laguages.vue";
import ProjectCard from "../src/components/ProjectCard.vue";
import Projects from "../src/components/Projects.vue";
import ContactForm from "../src/components/ContactForm.vue";
</script>
<template>
    <Header />
    <div class="hero--home">
        <div class="container">
            <h2>front end Developer In Raleigh, NC</h2>
            <h1>Bryan Vernon</h1>
            <div class="flex flex-col items-center mt-20 lg:mt-40">
                <div class="w-full md:w-8/12 lg:w-1/2 lg:mx-auto">
                    <div class="img-placeholder"></div>
                </div>
            </div>
            <div class="bottom-items flex flex-row justify-center">
                <div class="bottom-item">1400+ Projects</div>
                <div class="list-divider"></div>
                <div class="bottom-item">7+ Years Of Experience</div>
                <div class="list-divider"></div>
                <div class="bottom-item">Multiple Award Winning Sites</div>
            </div>
        </div>
    </div>

    <div class="stripe--bio lg:px-0 px-7">
        <div class="flex lg:flex-row flex-col items-center container">
            <div class="w-full md:w-8/12 lg:w-5/12 mx-auto lg:mb-0 mb-12">
                <Languages />
            </div>

            <div class="w-full lg:w-1/2 lg:ml-1/12 text-left">
                <h3 class="light-h3">Experienced In Many Languages</h3>
                <p>
                    <strong>Bryan Vernon</strong> is a seasoned Front-End
                    Developer with over 7 years of experience building fast,
                    accessible, and visually striking user interfaces. He’s
                    developed and launched more than 450 custom websites and
                    supported a portfolio of 1,000+ client sites.
                </p>
                <p>
                    Proficient in <strong>HTML/CSS</strong>,
                    <strong>JavaScript</strong>, <strong>Vue</strong>,
                    <strong>React</strong>,
                    <strong>PHP</strong>
                    and modern front-end tooling, Bryan crafts scalable,
                    component-based architectures that follow best practices in
                    <abbr title="Search Engine Optimization">SEO</abbr> and
                    <abbr title="Web Content Accessibility Guidelines"
                        >WCAG</abbr
                    >
                    accessibility. He bridges the gap between design and
                    development—working closely with designers, content teams,
                    and stakeholders to turn ideas into responsive,
                    high-performance interfaces that look as good as they feel
                    to use.
                </p>
                <p>
                    Bryan’s known for writing clean, maintainable code that
                    improves site speed, engagement, and conversion. He keeps
                    sharp by staying ahead of emerging frameworks and UX trends,
                    always pushing for elegant, efficient solutions.
                </p>
                <p>
                    Currently, he’s building
                    <strong>No Gluten, No Worries</strong>, a full-stack app
                    that helps users find gluten-free products available in
                    nearby stores.
                </p>
            </div>
        </div>
    </div>

    <div class="stripe--projects">
        <div class="container">
            <h3>Check Out My Projects</h3>

            <Projects />
        </div>
    </div>
    <div class="stripe--contact">
        <div class="container">
            <div class="w-full md:w-8/12 mx-auto lg:mb-0 mb-12">
                <h3>Get In Touch</h3>
                <ContactForm />
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
// @import "../src/styles.scss";
.hero--home {
    .container {
        padding: 80px 15px 67px;
    }
}
h1 {
    font-size: 13em;
    text-transform: lowercase;
    font-weight: 300;
    font-family: $heading;
    color: $secondary;
    line-height: 0.5;
}
h2 {
    font-size: 3em;
    font-weight: 400;
    font-style: italic;
    text-transform: uppercase;
    font-family: $altheading;
    color: $secondary;
}
h3 {
    font-size: 64px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: $heading;
    color: $dark;
    line-height: 1;
    margin-bottom: 44px;
    &.light-h3 {
        color: $light !important;
    }
}
p {
    font-family: $heading;
    font-size: 20px;
    font-weight: 500;
    color: $dark;
}
.img-placeholder {
    background-color: $secondary;
    border-radius: 65px;
    max-height: 604px;
    min-height: 490px;
    width: 100%;
    background-image: url("../src/assets/bryan.jpg");
    outline: 10px solid $secondary;
    border: 10px solid $light;
    background-size: cover;
    background-position: center;
    background-blend-mode: luminosity;
}
.bottom-items {
    justify-content: center;
    margin-top: 44px;
    align-items: center;
    .bottom-item {
        font-size: 2em;
        font-weight: 400;
        font-style: italic;
        text-transform: uppercase;
        font-family: $altheading;
        color: $dark;
    }
    .list-divider {
        width: 20px;
        height: 20px;
        background-color: $secondary;
        border-radius: 50%;
        margin: 0 10px;
    }
}
.hero--home {
    position: relative;
    .container {
        z-index: 5;
        position: relative;
    }
    &::after {
        content: "";
        width: 100vw;
        height: 286px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: $primary;
        position: absolute;
    }
}
.stripe--bio {
    position: relative;
    .container {
        z-index: 5;
        position: relative;
        padding: 80px 15px 110px;
    }
    &::after {
        content: "";
        width: 100vw;
        height: 100%;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: $secondary;
        position: absolute;
    }
    p {
        color: $light;
    }
}
.stripe--projects {
    position: relative;
    .container {
        z-index: 5;
        position: relative;
        padding: 120px 15px 120px;
    }
    &::after {
        content: "";
        width: 100vw;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: $primary;
        position: absolute;
    }
}
@media (min-width: 1024px) {
    .lg\:ml-1\/12 {
        margin-left: 8.333333%;
    }
}
</style>
