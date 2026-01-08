const axios = require('axios');

async function requestWrongURL() {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/invalidEndpoint');
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

module.exports = { requestWrongURL };