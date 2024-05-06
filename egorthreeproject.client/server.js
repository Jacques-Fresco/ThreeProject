import express from 'express';
import TelegramBot from 'node-telegram-bot-api';

const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 3000;


const botToken = '6710215028:AAGiDYpdE71_v7jJSbYrzm8kAXL8IK8CBbc';
const chatId = '-1002135771820';

const bot = new TelegramBot(botToken, { polling: false });

function sendMessageToTelegram(message) {
    bot.sendMessage(chatId, message)
        .then(() => console.log('Message sent to Telegram'))
        .catch((error) => console.error('Error sending message to Telegram:', error));
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://192.168.1.65:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(express.json());

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    const message = `New form submission:\nName: ${formData.name}\nEmail: ${formData.email}\nTelephone: ${formData.telephone}\nMessage: ${formData.message}`;

    sendMessageToTelegram(message);

    res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});