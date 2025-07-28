import { Link } from "react-router-dom";
import'../css/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      {/* Greeting */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">👋 Welcome, Admin</h2>
        <p className="text-muted">Use the options below to manage your products efficiently.</p>
      </div>

      {/* Dashboard Options */}
      <div className="row g-4 justify-content-center">
        {/* Add Category */}
        <div className="col-md-4">
          <Link to="/admin/product/addcate" className="text-decoration-none">
            <div className="card shadow-sm h-100 text-center border-0 hover-zoom">
              <div className="card-body py-4">
                <i className="bi bi-tags fs-1 text-primary mb-3"></i>
                <h5 className="card-title">Add Category</h5>
                <p className="card-text text-muted">Create product categories to organize your items.</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Add Product */}
        <div className="col-md-4">
          <Link to="/admin/product/add" className="text-decoration-none">
            <div className="card shadow-sm h-100 text-center border-0 hover-zoom">
              <div className="card-body py-4">
                <i className="bi bi-plus-circle fs-1 text-success mb-3"></i>
                <h5 className="card-title">Add Product</h5>
                <p className="card-text text-muted">Add new product with full details and image.</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product List */}
        <div className="col-md-4">
          <Link to="/admin/product/list" className="text-decoration-none">
            <div className="card shadow-sm h-100 text-center border-0 hover-zoom">
              <div className="card-body py-4">
                <i className="bi bi-card-list fs-1 text-danger mb-3"></i>
                <h5 className="card-title">All Products</h5>
                <p className="card-text text-muted">View and manage all products in your inventory.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
