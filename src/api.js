import axios from "axios";

const API_URL = "https://625958dd43fda1299a0c6198.mockapi.io/";
export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
