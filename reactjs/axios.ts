const axios = require('axios');

// Crie uma instância do Axios
const api = axios.create({
  baseURL: 'http://localhost:3030', // Altere para o seu URL base
  timeout: 10000, // 10 segundos de timeout
});

module.exports = api;