import React from "react";
import Header from "../Component/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-4 bg-light">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;


// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import AuthDrawer from "../Component/AuthDrawer";

// export default function MainLayout() {
//   const [showAuthDrawer, setShowAuthDrawer] = useState(false);

//   const handleDrawerOpen = () => setShowAuthDrawer(true);
//   const handleDrawerClose = () => setShowAuthDrawer(false);

//   return (
//     <>
//       {/* Navbar with login icon */}
//       <nav className="navbar navbar-dark bg-dark px-3">
//         <span className="navbar-brand">MyApp</span>
//         <div className="d-flex">
//           <button
//             className="nav-link text-white bg-transparent border-0"
//             onClick={handleDrawerOpen}
//             title="Login"
//           >
//             <i className="bi bi-person-circle fs-5"></i>
//           </button>
//         </div>
//       </nav>

//       <Outlet />

//       {/* Auth Drawer */}
//       <AuthDrawer show={showAuthDrawer} onClose={handleDrawerClose} />
//     </>
//   );
// }
