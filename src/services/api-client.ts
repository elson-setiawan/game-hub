import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "d62517f73727489a89135522bb84d60b" },
});
