import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2><i className="bi bi-shield-lock-fill text-primary me-2"></i>Privacy Policy</h2>
        <p className="text-muted">Last updated: July 2025</p>
      </div>

      <div className="card shadow-sm p-4">
        <h5><i className="bi bi-person-fill-lock text-success me-2"></i>Information We Collect</h5>
        <p>
          We collect personal information like your name, email, phone number, and payment details when you create an account or make a purchase.
        </p>

        <h5 className="mt-4"><i className="bi bi-shield-lock me-2 text-warning"></i>How We Use Your Information</h5>
        <p>
          Your information is used for order processing, account management, customer support, and to improve our services.
        </p>

        <h5 className="mt-4"><i className="bi bi-lock-fill me-2 text-info"></i>Data Security</h5>
        <p>
          We take strong precautions to protect your data from unauthorized access, modification, or disclosure.
        </p>

        <h5 className="mt-4"><i className="bi bi-box-arrow-in-right me-2 text-danger"></i>Third-Party Sharing</h5>
        <p>
          We do not sell or share your personal data with third parties, except where necessary for providing our services or if required by law.
        </p>

        <h5 className="mt-4"><i className="bi bi-gear-fill me-2 text-primary"></i>Your Rights</h5>
        <p>
          You can request access to your personal data, ask for corrections, or request deletion of your account anytime.
        </p>

        <div className="mt-5 text-end">
          <Link className="btn btn-outline-primary" to="/">
            <i className="bi bi-arrow-left-circle me-2"></i>Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
