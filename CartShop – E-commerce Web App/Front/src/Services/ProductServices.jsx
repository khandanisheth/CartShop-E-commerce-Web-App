// src/Services/ProductServices.js
import axios from "axios";
// ✅ Fix the API path to match Express route
const API = "http://localhost:8001/proadminapi";

const ProductServices = {
  //  Data Insert Categery By Admin
  create(formData) {
    return axios.post(`${API}/addproduct`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  // All Data Insert By Admin
  createAll(formDataall) {
    return axios.post(`${API}/addproductall`, formDataall, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  ///all feild fetch
  getAllPro() {
    return axios.get(`${API}/allproductpro`);
  },

  //2 feild fetch
  getAll() {
    return axios.get(`${API}/allproduct`);
  },

  getById(id) {
    return axios.get(`${API}/getproduct/${id}`);
  },

  update(id, formData) {
    return axios.put(`${API}/updateproduct/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  delete(id) {
    return axios.delete(`${API}/deleteproduct/${id}`);
  },

  productsingle(id) {
    return axios.get(`http://localhost:8001/proadminapi/productsingle/view/${id}`);
  },
  //
};
export default ProductServices;
