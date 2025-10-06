import express from 'express';

const app = express();
const PORT = 3000;

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1422173095879507969/vQQ_ksXiJe_mSFKglShgpuzaATHC7zKMErb2a8P5h2xIr5-OQ9oLkvYLgMrcHVGzDGtH";

app.use(express.json());

app.post('/notify', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: message }),
    })
    .then(response => {
        if (response.ok) {
            res.status(200).json({ status: 'Message sent to Discord' });
        } else {
            res.status(500).json({ error: 'Failed to send message to Discord' });
        }
    })
    .catch(error => {
        console.error('Error sending to discord', error);
        res.status(500).json({ error: 'failed sending message' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
