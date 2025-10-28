import 'dotenv/config';

const getOpenAIAPIResponse = async (message) => { // fixed async syntax
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: message // fixed to use function param instead of req.body.message
                }
            ]
        })
    };
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (err) {
        console.log(err);
    }
};

export default getOpenAIAPIResponse;
