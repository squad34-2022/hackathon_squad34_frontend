import axios from "axios";

const apiBack = axios.create({
  baseURL: "http://localhost:5000",
});

export default apiBack;
