import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductServices from "../Services/ProductServices";
// import "../Css/Pro.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await ProductServices.getAll();
      if (res.data.success) setProducts(res.data.data);
    } catch (err) {
      console.error("Failed to load products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <h3 className="text-center mb-4">🛍 All Categery</h3>
      <div className="row g-4">
        {products.map((item) => (
          <div className="col-md-4" key={item._id}>
            <Link to={`/productsingle/view/${item._id}`} style={{ textDecoration: "none" }}>
              <div className="card p-3 h-100">
                <img
                  src={`http://localhost:8001/upload/${item.image}`}
                  alt={item.prname}
                  className="img-fluid product-img"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="mt-2">
                  <h6 className="fw-bold">{item.prname}</h6>
                  {/* <p className="text-muted">{item.prtitle}</p>
                  <strong>₹{item.prprice}</strong> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
