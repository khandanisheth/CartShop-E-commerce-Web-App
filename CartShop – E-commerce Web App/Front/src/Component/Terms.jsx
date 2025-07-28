import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

export default function Terms() {
    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <h2><i className="bi bi-shield-check text-primary me-2"></i>Terms & Conditions</h2>
                <p className="text-muted">Please read the following terms carefully.</p>
            </div>

            <div className="card shadow-sm p-4">
                <h5><i className="bi bi-person-check me-2 text-success"></i>User Responsibilities</h5>
                <p>
                    You are responsible for maintaining the confidentiality of your account
                    and password. Do not share your login information with anyone else.
                </p>

                <h5 className="mt-4"><i className="bi bi-lock me-2 text-warning"></i>Privacy & Data</h5>
                <p>
                    We respect your privacy. Your personal information will never be shared with third parties
                    without your consent, except where required by law.
                </p>

                <h5 className="mt-4"><i className="bi bi-cart-check me-2 text-info"></i>Orders and Refunds</h5>
                <p>
                    All orders placed through our platform are subject to availability. Refunds are issued
                    only if the product is damaged or undelivered.
                </p>

                <h5 className="mt-4"><i className="bi bi-calendar2-event me-2 text-danger"></i>Modifications</h5>
                <p>
                    We may update or change our terms from time to time. Please review this page periodically.
                    Continued use of the site after any modifications indicates acceptance of those changes.
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
