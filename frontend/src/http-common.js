import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.255.135:8080/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});