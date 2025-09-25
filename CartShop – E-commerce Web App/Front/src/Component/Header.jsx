import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/header.css";
import AuthDrawer from "./AuthDrawer";
import logo from "../assets/logo.png"; // 👈 Add your logo image in assets folder
export default function Header() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const handleAuthSuccess = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setShowDrawer(false);
  };

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      setCurrentUser(storedUser ? JSON.parse(storedUser) : null);
    };
    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  //   useEffect(() => {
  //     const syncCart = () => {
  //       const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //       setCartCount(cart.length);
  //     };
  //     syncCart();
  //     window.addEventListener("storage", syncCart);
  //     return () => window.removeEventListener("storage", syncCart);
  //   }, []);

  useEffect(() => {
    const syncCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    syncCart();

    // ✅ LocalStorage + Custom Event dono listen karo
    window.addEventListener("storage", syncCart);
    window.addEventListener("cartUpdated", syncCart);

    return () => {
      window.removeEventListener("storage", syncCart);
      window.removeEventListener("cartUpdated", syncCart);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm sticky-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* 🔴 Left: Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <img
            src={logo} // apna logo yaha rakho (public folder me)
            alt="CartShop Logo"
            height="50"
            className="rounded-circle"
          />
        </Link>

        {/* 🟡 Center: Search Bar */}
        <form className="d-none d-md-flex flex-grow-1 mx-4" style={{ maxWidth: "500px" }}>
          <input type="search" className="form-control rounded-start-pill px-3" placeholder="Search for products..." aria-label="Search" />
          <button className="btn btn-primary rounded-end-pill px-3" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>

        {/* 🔵 Right: Icons */}
        <div className="d-flex align-items-center gap-3">
          {/* Cart with Count */}
          <Link className="nav-link text-white position-relative" to="/cartpage" title="Cart">
            <i className="bi bi-cart fs-5"></i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.7rem" }}>
                {cartCount}
              </span>
            )}
          </Link>

          {/* Wishlist */}
          <Link className="nav-link text-white" to="/wishlist" title="Wishlist">
            <i className="bi bi-heart fs-5"></i>
          </Link>

          {/* Login / Account */}
          <button
            className="nav-link text-white bg-transparent border-0"
            onClick={() => {
              currentUser ? navigate("/accountpage") : setShowDrawer(true);
            }}
            title="Login"
          >
            <i className="bi bi-person-circle fs-5"></i>
          </button>

          {/* Auth Drawer */}
          <AuthDrawer show={showDrawer} onClose={() => setShowDrawer(false)} onAuthSuccess={handleAuthSuccess} />
        </div>
      </div>
    </nav>
  );
}

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "../css/header.css";
// import AuthDrawer from "./AuthDrawer";
// // import ProfileDrawer from "./ProfileDrawer";

// import { useNavigate } from "react-router-dom";

// export default function Header() {
//   const [showDrawer, setShowDrawer] = useState(false);
//   //   const [showProfile, setShowProfile] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const navigate = useNavigate();
//   const [cartCount, setCartCount] = useState(0);
//   const handleAuthSuccess = (userData) => {
//     setCurrentUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//     setShowDrawer(false);
//   };

//   useEffect(() => {
//     const checkUser = () => {
//       const storedUser = localStorage.getItem("user");
//       setCurrentUser(storedUser ? JSON.parse(storedUser) : null);
//     };

//     checkUser();

//     window.addEventListener("storage", checkUser);
//     return () => window.removeEventListener("storage", checkUser);
//   }, []);

// useEffect(() => {
//   const syncCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartCount(cart.length);
//   };

//   syncCart();

//   window.addEventListener("storage", syncCart);
//   return () => window.removeEventListener("storage", syncCart);
// }, []);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
//       <div className="container-fluid d-flex justify-content-between align-items-center">
//         {/* 🔴 Left Side: Logo + Nav Links */}
//         <div className="d-flex align-items-center gap-4">
//           <Link className="navbar-brand fw-bold" to="/">
//             🛍️ Product App
//           </Link>
//           <ul className="navbar-nav flex-row gap-3">
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/">
//                 Home
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* 🔵 Right Side Icons */}
//         <div className="d-flex align-items-center gap-3">
//           <Link className="nav-link text-white position-relative" to="/cartpage" title="Cart">
//             <i className="bi bi-cart fs-5"></i>
//           </Link>
//           <Link className="nav-link text-white" to="/wishlist" title="Wishlist">
//             <i className="bi bi-heart fs-5"></i>
//           </Link>
//           <button
//             className="nav-link text-white bg-transparent border-0"
//             onClick={() => {
//               currentUser ? navigate("/accountpage") : setShowDrawer(true);
//             }}
//             title="Login"
//           >
//             <i className="bi bi-person-circle fs-5"></i>
//           </button>

//           <AuthDrawer show={showDrawer} onClose={() => setShowDrawer(false)} onAuthSuccess={handleAuthSuccess} />
//           {/* <ProfileDrawer show={showProfile} onClose={() => setShowProfile(false)} user={currentUser} onLogout={handleLogout} /> */}
//         </div>
//       </div>
//     </nav>
//   );
// }
