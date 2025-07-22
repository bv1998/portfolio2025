<script>
import ProjectCard from "./ProjectCard.vue";
import { ref, onMounted, onUnmounted } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import all project images
import riverflowImg from "../assets/riverflow.png";
import westCoastImg from "../assets/west-coast.png";
import cfoImg from "../assets/cfo.png";
import schedulerImg from "../assets/scheduler.png";
import ngnwImg from "../assets/ngnw.png";
import vanstireImg from "../assets/vanstire.png";

export default {
    components: {
        Swiper,
        SwiperSlide,
        ProjectCard,
    },
    setup() {
        const isMobile = ref(false);
        const modules = [EffectCoverflow, Pagination];

        const checkScreenSize = () => {
            isMobile.value = window.innerWidth < 979;
        };

        onMounted(() => {
            checkScreenSize();
            window.addEventListener("resize", checkScreenSize);
        });

        onUnmounted(() => {
            window.removeEventListener("resize", checkScreenSize);
        });

        return {
            isMobile,
            modules,
        };
    },
    data() {
        return {
            projects: {
                proj1: {
                    name: "Riverlight",
                    type: "Mobile App - In Development",
                    image: new URL("../assets/riverflow.png", import.meta.url)
                        .href,
                    langs: ["React", "Expo", "TypeScript", "Firebase"],
                    link: "/",
                },
                proj2: {
                    name: "West Coast Tire Pros",
                    type: "Custom Website",
                    image: new URL("../assets/west-coast.png", import.meta.url)
                        .href,
                    langs: ["HTML", "CSS", "PHP", "JS", "Wordpress"],
                    link: "https://westcoasttire.com",
                },
                proj3: {
                    name: "Century Farm Orchards",
                    type: "Custom Website",
                    image: new URL("../assets/cfo.png", import.meta.url).href,
                    langs: ["Laravel", "PHP", "VueJS", "Wordpress"],
                    link: "/",
                },
                proj4: {
                    name: "Appointment Scheduler",
                    type: "Custom embeddable web app",
                    image: new URL("../assets/scheduler.png", import.meta.url)
                        .href,
                    langs: ["VUEJS", "Tailwind", "Pinia", "SourceMap JS"],
                    link: "/",
                },
                proj5: {
                    name: "No Gluten No Worries",
                    type: "Full Stack Web App - In Progress",
                    image: new URL("../assets/ngnw.png", import.meta.url).href,
                    langs: ["VueJS", "Node.JS", "PostgreSQL"],
                    link: "/",
                },
                proj6: {
                    name: "Vans Tire Pros",
                    type: "Custom Website",
                    image: new URL("../assets/vanstire.png", import.meta.url)
                        .href,
                    langs: ["HTML", "CSS", "PHP", "JS", "Wordpress"],
                    link: "https://vanstire.com",
                },
            },
        };
    },
};
</script>

<template>
    <!-- Desktop Grid Layout -->
    <div v-if="!isMobile" class="projects-grid">
        <div
            class="project-grid-item"
            v-for="(project, index) in projects"
            :key="index"
        >
            <ProjectCard
                :projectName="project.name"
                :projectType="project.type"
                :projectImg="project.image"
                :projectLang="project.langs"
                :projectLink="project.link"
            />
        </div>
    </div>

    <!-- Mobile Swiper Carousel -->
    <div v-else class="projects-swiper-container">
        <swiper
            :slides-per-view="1.2"
            :space-between="20"
            :centered-slides="true"
            :loop="true"
            :pagination="{
                clickable: true,
            }"
            :modules="modules"
            class="projects-swiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide
                v-for="(project, index) in projects"
                :key="index"
                class="swiper-slide-custom"
            >
                <ProjectCard
                    :projectName="project.name"
                    :projectType="project.type"
                    :projectImg="project.image"
                    :projectLang="project.langs"
                    :projectLink="project.link"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped lang="scss">
/* Desktop Grid Styles */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        display: none;
    }
}

.project-grid-item {
    width: 100%;
}

/* Mobile Swiper Styles */
.projects-swiper-container {
    width: 100%;
    padding: 2rem 0;

    @media (min-width: 769px) {
        display: none;
    }
}

.projects-swiper {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 50px;
}

.projects-swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
    height: auto;
    transition: all 0.3s ease;
}

/* Material3 carousel effect - active slide is larger */
.projects-swiper .swiper-slide-active {
    transform: scale(1.1);
    z-index: 10;
}

.projects-swiper .swiper-slide-prev,
.projects-swiper .swiper-slide-next {
    transform: scale(0.9);
    opacity: 0.7;
}

/* Pagination dots styling */
:deep(.swiper-pagination) {
    bottom: 0;
}

:deep(.swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
    background: #666;
    opacity: 0.5;
    transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
    width: 24px;
    border-radius: 4px;
    background: #333;
    opacity: 1;
}
</style>
