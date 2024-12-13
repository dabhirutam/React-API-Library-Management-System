import axios from "axios";

export const ApiBaseURL = axios.create ({
    baseURL: 'http://localhost:3002'
})