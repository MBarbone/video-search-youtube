import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyBebcyXaOoqVi8ZJFe6p7AYv3HUWXfKh88",
  },
});
