import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/AccountPage.css";
export default function AccountPage() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    username: "Guest",
    useremail: "guest@example.com",
    userphone: "+91xxxxxxxxxx",
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("storage")); // Header ke liye trigger
    navigate("/"); // sirf home page par redirect kar do
  };

  return (
    <div className="account-page d-flex">
      {/* Sidebar */}
      <aside className="sidebar bg-white shadow-sm">
        <div className="p-3 border-bottom">
          <div className="fw-bold fs-5">👋 Hello, {user.username}</div>
        </div>

        <nav className="p-3">
          <h6 className="text-muted">MY ORDERS</h6>
          <Link className="nav-link">My Orders</Link>

          <h6 className="text-muted mt-4">ACCOUNT SETTINGS</h6>
          <Link className="nav-link">Profile Information</Link>
          <Link className="nav-link">Manage Addresses</Link>
          <Link className="nav-link">PAN Card</Link>

          <h6 className="text-muted mt-4">PAYMENTS</h6>
          <Link className="nav-link">Gift Cards</Link>
          <Link className="nav-link">Saved Cards</Link>

          <h6 className="text-muted mt-4">MY STUFF</h6>
          <Link className="nav-link">My Coupons</Link>
          <Link className="nav-link">My Wishlist</Link>

          <button className="btn btn-danger mt-4 w-100" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content p-4 bg-light flex-grow-1">
        <h4 className="mb-3">Personal Information</h4>

        <div className="card p-3 mb-4">
          <p>
            <strong>Name:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.useremail}
          </p>
          <p>
            <strong>Mobile:</strong> {user.userphone || "+91XXXXXXXXXX"}
          </p>
          <p>
            <strong>Gender:</strong> Not Set
          </p>
          <button className="btn btn-sm btn-outline-primary">Edit</button>
        </div>

        <h5 className="mt-5">FAQs</h5>
        <p>What happens when I update my email or mobile number?</p>
        <p>You’ll receive all account info on updated credentials.</p>
        <p>Does my Seller account get affected?</p>
        <p>Changes reflect on Seller account due to single sign-on policy.</p>

        <div className="mt-3">
          <Link className="text-danger me-3">Deactivate Account</Link>
          <Link className="text-danger">Delete Account</Link>
        </div>
      </main>
    </div>
  );
}
