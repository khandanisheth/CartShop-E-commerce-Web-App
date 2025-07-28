import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductServices from "../Services/ProductServices";
import "../css/Profile.css";
export default function ProductProfile() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [msg, setMsg] = useState("");
  const [previewImage, setPreviewImage] = useState(""); // for thumbnail hover

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await ProductServices.getById(id);
        if (res.data.success) {
          setProduct(res.data.data);
          setPreviewImage(`http://localhost:8001/upload/${res.data.data.image}`);
        } else {
          setMsg("❌ Product not found.");
        }
      } catch (error) {
        console.error(error);
        setMsg("❌ Failed to fetch product.");
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists
    const isExist = existingCart.find((item) => item._id === product._id);

    if (!isExist) {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Added to cart!");
    } else {
      alert("Already in cart!");
    }
  };

  if (msg) return <div className="alert alert-danger">{msg}</div>;
  if (!product) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Side Thumbnails + Preview */}
        <div className="col-md-6 d-flex">
          <div className="me-3 d-flex flex-column gap-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={`http://localhost:8001/upload/${product.image}`}
                alt="thumb"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setPreviewImage(`http://localhost:8001/upload/${product.image}`)}
              />
            ))}
          </div>

          <div>
            <img src={previewImage} className="img-fluid rounded" style={{ maxHeight: "450px", objectFit: "contain" }} alt={product.prname} />
          </div>
        </div>

        {/* Right Side Info */}
        <div className="col-md-6">
          <h3 className="text-capitalize fw-bold">{product.prname}</h3>
          <p className="text-muted fs-5">{product.prtitle}</p>

          <p className="mb-1">
            <strong>Brand:</strong> {product.prbrand}
          </p>
          {/* <p className="text-success fs-4 fw-bold">
            ₹{product.prprice} <small className="text-muted text-decoration-line-through ms-2">₹{parseInt(product.prprice) + 500}</small>{" "}
            <span className="text-success">77% off</span>
          </p> */}

          <p className="text-success fs-4 fw-bold">
            ₹{product.prprice}
            <small className="text-muted text-decoration-line-through ms-2">₹{parseInt(product.prprice) + 500}</small>{" "}
            <span className="text-success">{Math.round((500 / (parseInt(product.prprice) + 500)) * 100)}% off</span>
          </p>

          <p>
            <strong>Rating:</strong> {product.prmessage}⭐
          </p>
          <div className="d-flex gap-3 mt-4">
            {/* <button className="btn btn-warning text-white fw-bold px-4 py-2">🛒 ADD TO CART</button> */}
            <button onClick={() => handleAddToCart(product)} className="btn btn-success">
              <i className="bi bi-cart-plus-fill me-2"></i> Add to Cart
            </button>

            <button className="btn btn-danger fw-bold px-4 py-2">⚡ BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
