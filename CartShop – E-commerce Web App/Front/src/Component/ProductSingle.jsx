import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../css/ProSingle.css";
import ProductServices from "../Services/ProductServices";
const ProductSingle = () => {
  const { id } = useParams();
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await ProductServices.productsingle(id);
        if (res.data.success) {
          setRelatedItems(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching related items", error);
      }
    };
    fetchRelated();
  }, [id]);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">🛒 Related Products</h3>
      <div className="row g-4">
        {relatedItems.map((item) => (
          <div className="col-md-4 col-sm-6" key={item._id}>
            <Link to={`/product/${item._id}`} className="text-decoration-none text-dark">
              <div
                className="card product-card h-100 shadow-sm border-0"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  height: "100%",
                }}
              >
                <img
                  src={`http://localhost:8001/upload/${item.image}`}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "contain" }}
                  alt={item.prname}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="fw-bold text-truncate" title={item.prbrand}>
                    {item.prbrand}
                  </h6>
                  <p className="text-muted small text-truncate" title={item.prtitle}>
                    {item.prtitle}
                  </p>
                  <p className="mb-1 fw-bold">₹ {item.prprice}</p>
                  <p className="text-muted small text-truncate" title={item.prmessage}>
                    ⭐ {item.prmessage}
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
    </div>
  );
};

export default ProductSingle;
