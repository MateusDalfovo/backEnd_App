import axios from "axios"

export const api = axios.create({
    // Endereço da API - localhost
    baseURL: "http://localhost:8090"
    })