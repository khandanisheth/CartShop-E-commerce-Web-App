import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductServices from "../Services/ProductServices";
import "../css/ProSingle.css";

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await ProductServices.getPopular();
        if (res.data.success) {
          setPopularProducts(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch popular products", err);
      }
    };
    fetchPopular();
  }, []);

  if (!popularProducts || popularProducts.length === 0) return null;

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4 fw-bold">🔥 Popular Items</h2>
      <div className="row g-4">
        {popularProducts.map((item) => (
          <div className="col-sm-6 col-md-3" key={item._id}>
            <Link
              to={`/product/${item._id}`} // 👈 ProductProfile ke liye path
              className="text-decoration-none text-dark"
            >
              <div
                className="card product-card h-100 shadow-sm border-0"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  height: "100%",
                }}
              >
                <img
                  src={`http://localhost:8001/upload/${item.image}`}
                  className="card-img-top p-3"
                  style={{ height: "180px", objectFit: "contain" }}
                  alt={item.prname}
                />
                <div className="card-body d-flex flex-column text-center">
                  <h6 className="fw-bold text-truncate" title={item.prbrand}>
                    {item.prbrand}
                  </h6>
                  <p className="text-muted small text-truncate" title={item.prtitle}>
                    {item.prtitle}
                  </p>
                  <p className="mb-1 fw-bold text-success">₹ {item.prprice}</p>
                  <p className="text-muted small text-truncate" title={item.prmessage}>
                     {item.prmessage}⭐
                  </p>

                  <div className="mt-auto d-flex justify-content-between gap-2">
                    <button className="btn btn-sm btn-outline-primary w-50">Add to Cart</button>
                    <button className="btn btn-sm btn-primary w-50">Buy Now</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 18px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default PopularProducts;
