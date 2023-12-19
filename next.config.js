require('dotenv').config()
const withImages = require('next-images'); // Для обработки изображений

module.exports = withImages({
    env: {
        ENDPOINT: process.env.ENDPOINT,
        WEBSOCKET: process.env.WEBSOCKET,
    },
    images: {
        domains: ['storage.yandexcloud.net', 'cdn4.cdn-telegram.org', 'cdn5.cdn-telegram.org'],
    },
});
