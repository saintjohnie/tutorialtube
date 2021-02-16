import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  // params: {
  //   part: "snippet",
  //   maxResults: 5,
  //   key: "AIzaSyC8Z0C3T22jyf-X-H2EnrZZMaO0uKVYW3c",
  // },
});


// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
// });