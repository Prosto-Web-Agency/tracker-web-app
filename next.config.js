require('dotenv').config()
const withImages = require('next-images'); // Для обработки изображений

module.exports = withImages({
    env: {
        ENDPOINT: process.env.ENDPOINT,
        TEST_USER_LOGIN: process.env.TEST_USER_LOGIN,
        TEST_USER_PASSWORD: process.env.TEST_USER_PASSWORD,
    },
    images: {
        domains: ['prostoagency.storage.yandexcloud.net'],
    },
});
