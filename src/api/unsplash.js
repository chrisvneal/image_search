import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Zsih4GbRC2tQsBCbCAhBCyxcq4YLPc6cwMdWnLC8As0"
  }
});
