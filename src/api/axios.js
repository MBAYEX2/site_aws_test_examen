// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur requêtes : ajoute token si présent
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercepteur réponses : gestion globale des erreurs (optionnel)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Exemple : déconnexion automatique si 401
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
    }
    return Promise.reject(error);
  }
);

export default api;
