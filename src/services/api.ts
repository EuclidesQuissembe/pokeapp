import axios from "axios";

const api = axios.create({
  baseURL: "https://graphql-pokeapi.vercel.app/api/graphql",
});

export default api;
