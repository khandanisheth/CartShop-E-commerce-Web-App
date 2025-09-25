import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // 👈 Add your logo image in assets folder

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand + Logo */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <Link to="/" className="d-flex align-items-center mb-2 text-decoration-none">
              <img src={logo} alt="CartShop Logo" style={{ width: "80px", height: "80px" }} />
              {/* <span className="fw-bold ms-2 fs-5">CartShop</span> */}
            </Link>
            <p className="text-light small">
              Your trusted destination for the best products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-light mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/accountpage" className="text-light text-decoration-none">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/cartpage" className="text-light text-decoration-none">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-light text-decoration-none">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="text-light mb-3">Contact</h5>
            <p className="text-light mb-1">
              <i className="bi bi-envelope-fill me-2"></i> support@cartshop.com
            </p>
            <p className="text-light mb-1">
              <i className="bi bi-telephone-fill me-2"></i> +91 98765 43210
            </p>
            <p className="text-light">
              <i className="bi bi-geo-alt-fill me-2"></i> Jaipur, Rajasthan, India
            </p>
          </div>

          {/* Newsletter + Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="text-light mb-3">Newsletter</h5>
            <p className="small text-light">Subscribe to our newsletter to get latest updates.</p>
            <div className="d-flex mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control form-control-sm rounded-start"
              />
              <button className="btn btn-primary btn-sm rounded-end">Subscribe</button>
            </div>
            <h6 className="text-light mb-2">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-top border-light opacity-25" />

        {/* Footer Bottom */}
        <div className="text-center text-light small mt-3">
          &copy; {new Date().getFullYear()} CartShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
























// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-light pt-5 pb-3 mt-5">
//       <div className="container">
//         <div className="row">
//           {/* Brand */}
//           <div className="col-md-3 mb-4">
//             <Link className="fw-bold">CartShop</Link>
//             <p className="text-muted">Your trusted destination for the best products at the best prices.</p>
//           </div>

//           {/* Quick Links */}
//           <div className="col-md-3 mb-4">
//             <h5 className="text-light">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="/" className="text-light text-decoration-none">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/accountpage" className="text-light text-decoration-none">
//                   My Account
//                 </a>
//               </li>
//               <li>
//                 <a href="/cartpage" className="text-light text-decoration-none">
//                   Cart
//                 </a>
//               </li>
//               <li>
//                 <a href="/productsingle/view/1" className="text-light text-decoration-none">
//                   Shop
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           {/* Contact */}
//           <div className="col-md-3 mb-4">
//             <h5 className="text-light">Contact</h5>
//             <p className="text-light mb-1">
//               <i className="bi bi-envelope-fill me-2"></i> support@cartshop.com
//             </p>
//             <p className="text-light mb-1">
//               <i className="bi bi-telephone-fill me-2"></i> +91 98765 43210
//             </p>
//             <p className="text-light">
//               <i className="bi bi-geo-alt-fill me-2"></i> Jaipur, Rajasthan, India
//             </p>
//           </div>

//           {/* Social Media */}
//           <div className="col-md-3 mb-4">
//             <h5>Follow Us</h5>
//             <div className="d-flex gap-3 mt-2">
//               <a href="#" className="text-light fs-5">
//                 <i className="bi bi-facebook"></i>
//               </a>
//               <a href="#" className="text-light fs-5">
//                 <i className="bi bi-instagram"></i>
//               </a>
//               <a href="#" className="text-light fs-5">
//                 <i className="bi bi-twitter-x"></i>
//               </a>
//               <a href="#" className="text-light fs-5">
//                 <i className="bi bi-linkedin"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         <hr className="border-top border-light opacity-25" />

//         {/* Footer bottom */}
//         <div className="text-center text-light small mt-3">&copy; {new Date().getFullYear()} CartShop. All rights reserved.</div>
//       </div>
//     </footer>
//   );
// }
