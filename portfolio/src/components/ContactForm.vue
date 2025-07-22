<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

const formData = ref({
    name: "",
    email: "",
    message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref("");

const sendToTelegram = async () => {
    isSubmitting.value = true;
    submitStatus.value = "";

    try {
        // Format the message
        const telegramMessage = `
🔔 New Contact Form Submission

👤 Name: ${formData.value.name}
📧 Email: ${formData.value.email}
💬 Message: 
${formData.value.message}
        `.trim();

        // Replace these with your actual values
        const BOT_TOKEN = "8113258027:AAGBpUaDPKoaxb_v06NpQ9NkkwbcaXpEfTM";
        const CHAT_ID = "7652621278";

        const response = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: telegramMessage,
                    parse_mode: "HTML",
                }),
            }
        );

        if (response.ok) {
            submitStatus.value = "success";
            // Clear form
            formData.value = { name: "", email: "", message: "" };
        } else {
            throw new Error("Failed to send message");
        }
    } catch (error) {
        console.error("Error:", error);
        submitStatus.value = "error";
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <div class="contact-form-wrapper">
        <p>
            Have a project that needs a creative frontend touch? Looking for a
            developer to join your team? I'm open to freelance work and new
            opportunities. Let's start a conversation!
        </p>
        <div
            class="socials my-6 flex lg:flex-row flex-col items-center justify-center gap-4"
        >
            <a href="https://www.linkedin.com/in/bryan-vernon" target="_blank"
                ><i class="fa-brands text-3xl fa-linkedin"></i
            ></a>
            <a href="https://github.com/bv1998" target="_blank"
                ><i class="fa-brands text-3xl fa-github"></i
            ></a>
            <a href="https://www.instagram.com/bryanvern/" target="_blank"
                ><i class="fa-brands text-3xl fa-instagram"></i
            ></a>
        </div>
        <form
            id="contactForm"
            class="contact-form"
            @submit.prevent="sendToTelegram"
        >
            <input
                v-model="formData.name"
                type="text"
                class="name"
                placeholder="Name"
                required
            />
            <input
                v-model="formData.email"
                type="email"
                class="email"
                placeholder="Email"
                required
            />
            <textarea
                v-model="formData.message"
                class="message"
                placeholder="Message"
                required
            ></textarea>
            <button
                type="submit"
                class="btn btn--main"
                :disabled="isSubmitting"
            >
                {{ isSubmitting ? "Sending..." : "Send Message" }}
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </form>

        <!-- Status messages -->
        <div v-if="submitStatus === 'success'" class="status-message success">
            Message sent successfully! I'll get back to you soon.
        </div>
        <div v-if="submitStatus === 'error'" class="status-message error">
            Failed to send message. Please try again or contact me directly via
            social media.
        </div>
    </div>
</template>

<style scoped lang="scss">
.contact-form {
    padding: 50px 30px;
    outline: 10px solid $primary;
    background: $light;
    outline-offset: -20px;
    border-radius: 30px;
    margin: 50px 0;
    border: 10px solid $secondary;
    display: grid;
    grid-column-gap: 2%;
    -ms-grid-columns: (1fr 2%);
    grid-row-gap: 16px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(auto-fill, auto);
    width: 100%;
    .name,
    .email {
        grid-column-end: auto;
        grid-column-start: span 6;
        padding: 20px;
        border-radius: 10px;
        font-family: $heading;
        background: $light;
        border: 3px solid $secondary;
    }
    .message {
        grid-column-end: auto;
        grid-column-start: span 12;
        padding: 20px;
        border-radius: 10px;
        font-family: $heading;
        min-height: 250px;
        background: $light;
        border: 3px solid $secondary;
    }
    button {
        grid-column: 5 / span 3;
    }
}
.btn {
    padding: 7px 3px;
    border-radius: 0px;
    font-family: $heading;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    text-align: left !important;

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

// Add status message styles
.status-message {
    margin-top: 20px;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    font-family: $heading;

    &.success {
        background: #d4edda;
        color: #155724;
        border: 2px solid #c3e6cb;
    }

    &.error {
        background: #f8d7da;
        color: #721c24;
        border: 2px solid #f5c6cb;
    }
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
