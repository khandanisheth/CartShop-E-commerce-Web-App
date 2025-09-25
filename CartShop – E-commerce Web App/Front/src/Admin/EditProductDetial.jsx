import React, { useEffect, useState } from "react";
import ProductServices from "../Services/ProductServices";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProductDetial() {
  const [productData, setProductData] = useState({
    prname: "",
    prtitle: "",
    prbrand: "",
    prprice: "",
    prmessage: "",
  });

  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await ProductServices.getById(id);
      if (res.data.success) {
        setProductData(res.data.data);
      } else {
        setMsg("❌ Product not found.");
      }
    } catch (error) {
      console.error(error);
      setMsg("❌ Failed to fetch product.");
    }
  };

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in productData) {
      formData.append(key, productData[key]);
    }

    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await ProductServices.update(id, formData);
      if (res.data.success) {
        setMsg("✅ Product updated successfully!");
        setTimeout(() => {
          navigate("/admin/admindashboard");
        }, 2000);
      } else {
        setMsg("❌ Update failed.");
      }
    } catch (error) {
      console.error(error);
      setMsg("❌ Error: " + (error.response?.data?.msg || error.message));
    }
  };

  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: "600px" }}>
      <h4 className="mb-4 text-center">Edit Product</h4>
      {msg && <div className="alert alert-info">{msg}</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" name="prname" value={productData.prname} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Brand</label>
          <input type="text" className="form-control" name="prbrand" value={productData.prbrand} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Title</label>
          <input type="text" className="form-control" name="prtitle" value={productData.prtitle} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Price</label>
          <input type="number" className="form-control" name="prprice" value={productData.prprice} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Review/Message</label>
          <textarea className="form-control" name="prmessage" value={productData.prmessage} onChange={handleChange} required></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input type="file" className="form-control" name="image" onChange={handleFileChange} />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Update Product
        </button>
      </form>
    </div>
  );
}
