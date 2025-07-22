exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { name, email, message } = JSON.parse(event.body);

        const telegramMessage = `
🔔 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
💬 Message: 
${message}
        `.trim();

        const response = await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text: telegramMessage,
                    parse_mode: "HTML",
                }),
            }
        );

        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true }),
            };
        } else {
            throw new Error("Telegram API error");
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send message" }),
        };
    }
};
