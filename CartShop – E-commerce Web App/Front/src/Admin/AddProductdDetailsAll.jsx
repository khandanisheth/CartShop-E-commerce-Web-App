import React, { useState } from "react";
import ProductServices from "../Services/ProductServices";
import { useNavigate, useParams } from "react-router-dom";
const AddProductdDetailsAll = () => {
  const [formData, setFormData] = useState({
    prname: "",
    prtitle: "",
    prbrand: "",
    prprice: "",
    prmessage: "",
  });

  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    data.append("image", image);

    try {
      let res = await ProductServices.createAll(data);
      if (res.status === 201) {
        setMsg("✅ Product added successfully!");
        setImage(null);
        setFormData({
          prname: "",
          prtitle: "",
          prbrand: "",
          prprice: "",
          prmessage: "",
        });

        setTimeout(() => {
          navigate("/admin/admindashboard");
        }, 2000);
      } else {
        setMsg("❌ Error: " + res.data.message);
      }
    } catch (err) {
      setMsg("❌ Failed to send data.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          {msg && <div className="alert alert-info">{msg}</div>}
          <h5 className="mt-4 mb-3">Submit Your Product</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input type="text" className="form-control" name="prname" value={formData.prname} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Product Brand</label>
              <input type="text" className="form-control" name="prbrand" value={formData.prbrand} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Product Title</label>
              <input type="text" className="form-control" name="prtitle" value={formData.prtitle} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Product Price</label>
              <input type="number" className="form-control" name="prprice" value={formData.prprice} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Product Image</label>
              <input type="file" className="form-control" name="image" onChange={handleFileChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Review</label>
              <textarea className="form-control" name="prmessage" value={formData.prmessage} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductdDetailsAll;
