require('dotenv').config()
const withImages = require('next-images'); // Для обработки изображений

module.exports = withImages({
    env: {
        ENDPOINT: process.env.ENDPOINT,
        WEBSOCKET: process.env.WEBSOCKET,
        WEBSOCKET_COACHING: process.env.WEBSOCKET_COACHING,
        WEBSOCKET_PSYCHOLOGIST: process.env.WEBSOCKET_PSYCHOLOGIST,
        WEBSOCKET_FOR_COACH: process.env.WEBSOCKET_FOR_COACH,
        WEBSOCKET_FOR_PSYCHOLOG: process.env.WEBSOCKET_FOR_PSYCHOLOG,
    },
    images: {
        domains: ['storage.yandexcloud.net', 'cdn4.cdn-telegram.org', 'cdn5.cdn-telegram.org'],
    },
});
