const axios = require('axios');

// Crie uma instância do Axios
const axiosConfig = axios.create({
  baseURL: 'http://localhost:3030', // Altere para o seu URL base
  timeout: 10000, // 10 segundos de timeout
});

export default axiosConfig;