import React from "react";
import { Link, Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div>
      {/* Admin Header Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        {/* <span className="navbar-brand"></span> */}
        <Link className="nav-link text-white navbar-brand" to="/admin/admindashboard">
          🛠 Admin Dashboard
        </Link>
        <ul className="navbar-nav d-flex flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/product/addcate">
              Add Category
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/product/add">
              Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/product/list">
              All Products
            </Link>
          </li>

          <Link className="nav-link" to="/login" onClick={() => localStorage.removeItem("auth")}>
            Logout
          </Link>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
