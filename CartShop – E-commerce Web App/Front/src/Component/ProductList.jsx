import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductServices from "../Services/ProductServices";
import PopularProducts from "./PopularProducts";

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
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">🛍 All Categories</h2>

      <div className="row g-4">
        {products.map((item) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={item._id}>
            <Link to={`/productsingle/view/${item._id}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm border-0 rounded-4 hover-card" style={{ transition: "0.3s" }}>
                <div className="d-flex align-items-center justify-content-center p-3 bg-light rounded-4">
                  <img
                    src={`http://localhost:8001/upload/${item.image}`}
                    alt={item.prname}
                    className="img-fluid"
                    style={{
                      maxHeight: "160px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h6 className="fw-bold text-uppercase">{item.prname}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Extra styling */}
      <style>{`
        .hover-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 18px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* Popular Products Section */}
      <PopularProducts />
    </div>
  );
};

export default ProductList;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ProductServices from "../Services/ProductServices";
// // import "../Css/Pro.css";
// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const res = await ProductServices.getAll();
//       if (res.data.success) setProducts(res.data.data);
//     } catch (err) {
//       console.error("Failed to load products", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="container mt-5 mb-5">
//       <h3 className="text-center mb-4">🛍 All Categery</h3>
//       <div className="row g-4">
//         {products.map((item) => (
//           <div className="col-md-4" key={item._id}>
//             <Link to={`/productsingle/view/${item._id}`} style={{ textDecoration: "none" }}>
//               <div className="card p-3 h-100">
//                 <img
//                   src={`http://localhost:8001/upload/${item.image}`}
//                   alt={item.prname}
//                   className="img-fluid product-img"
//                   style={{ height: "200px", objectFit: "contain" }}
//                 />
//                 <div className="mt-2">
//                   <h6 className="fw-bold">{item.prname}</h6>
//                   {/* <p className="text-muted">{item.prtitle}</p>
//                   <strong>₹{item.prprice}</strong> */}
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
