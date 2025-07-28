import axios from "axios";
const API = "http://localhost:8001/user/";

const userDataServices = {
  create(userData) {
    return axios.post(`${API}signup`, userData);
  },
  login(userData) {
    return axios.post(`${API}login`, userData);
  },
};

export default userDataServices;
