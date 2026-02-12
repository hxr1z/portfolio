// src/config.js

const config = {
  API_URL: window.location.hostname === "localhost" 
    ? "http://localhost:5000" // Local development
    : "https://hariz-portfolio-api.onrender.com" // <--- PASTE YOUR RENDER URL HERE
};

export default config;