import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductServices from "../Services/ProductServices";
// import "../Css/Pro.css";
const AllProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const fetchProducts = async () => {
    try {
      const res = await ProductServices.getAllPro();
      if (res.data.success) {
        setProducts(res.data.data);
      } else {
        setError("❌ Failed to fetch products.");
      }
    } catch (error) {
      console.error(error);
      setError("❌ Something went wrong.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await ProductServices.delete(id);
        fetchProducts(); // Refresh list
      } catch (err) {
        console.error(err);
        alert("❌ Error deleting product");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h4 className="text-center mb-4">Product List</h4>
      {error && <div className="alert alert-danger">{error}</div>}

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead className="table-dark text-center">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Title</th>
                <th>Price</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img src={`http://localhost:8001/upload/${product.image}`} alt={product.prname} className="rounded" width="60" height="60" />
                  </td>
                  <td>{product.prname}</td>
                  <td>{product.prbrand}</td>
                  <td className="text-truncate" style={{ maxWidth: "200px" }} title={product.prtitle}>
                    {product.prtitle}
                  </td>
                  <td>₹{product.prprice}</td>
                  <td className="text-truncate" style={{ maxWidth: "300px" }} title={product.prmessage}>
                    {product.prmessage}
                  </td>
                  <td>
                    <Link to={`/admin/product/edit/${product._id}`} className="btn btn-sm btn-warning me-1">
                      Edit
                    </Link>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllProductList;
