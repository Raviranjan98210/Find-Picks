import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID M1ukPX5JKjuQofFLlsMWHNvv_-ouw58olg9fXJkuWNg",
  },
});
