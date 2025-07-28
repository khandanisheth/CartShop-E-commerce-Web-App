// Required imports
import React, { useState } from "react";
import ProductServices from "../Services/ProductServices"; // ⬅️ API se connect hone ke liye
import { Link, useNavigate } from "react-router-dom"; // ⬅️ Page redirect ke liye

// ✅ Functional component start
const AddProduct = () => {
  // 🔸 Form fields ka state
  const [formData, setFormData] = useState({
    prname: "", // ⬅️ Product name input
  });

  // 🔸 File upload ke liye state
  const [image, setImage] = useState(null);

  // 🔸 User ko success/error message dikhane ke liye
  const [msg, setMsg] = useState("");

  // 🔸 Page redirect karne ke liye
  const navigate = useNavigate();

  // 🔸 Input field me change aane par state update
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔸 File choose hone par image state me update
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // ✅ Form submit hone par backend API ko data bhejna
  const handleSubmit = async (e) => {
    e.preventDefault(); // ⬅️ Page reload na ho

    // 📦 FormData object bana rahe hain file/image bhejne ke liye
    const data = new FormData();

    // 🔁 formData ke sab fields ko loop karke FormData me daalna
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    // 📸 Image bhi FormData me daalna
    data.append("image", image);

    try {
      // 🛰️ API call: ProductServices.create(data)
      let res = await ProductServices.create(data);

      // ✅ Agar status 201 hai to success
      if (res.status === 201) {
        setMsg("✅ Product added successfully!");

        // Form reset
        setImage(null);
        setFormData({ prname: "" });

        // ⏳ 2 second baad home page pe redirect
        setTimeout(() => {
          navigate("/admin/admindashboard");
        }, 2000);
      } else {
        // ❌ Agar kuch error message mile to woh dikhana
        setMsg("❌ Error: " + res.data.message);
      }
    } catch (err) {
      // ❌ Agar backend se koi problem aaye
      setMsg("❌ Failed to send data.");
      console.error(err);
    }
  };

  // ✅ Component ka return (HTML part)
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          {/* 🔔 Message dikhana agar success ya error ho */}
          {msg && <div className="alert alert-info">{msg}</div>}

          <h5 className="mt-4 mb-3">Submit Your Product</h5>

          {/* 🔸 FORM Start */}
          <form onSubmit={handleSubmit}>
            {/* 🔹 Product Name Input */}
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input type="text" className="form-control" name="prname" value={formData.prname} onChange={handleChange} required />
            </div>

            {/* 🔹 Image Upload Input */}
            <div className="mb-3">
              <label className="form-label">Product Image</label>
              <input type="file" className="form-control" name="image" onChange={handleFileChange} required />
            </div>

            {/* 🔹 Submit Button */}
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
          {/* 🔸 FORM End */}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
