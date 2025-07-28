// client/src/Components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = localStorage.getItem("auth");
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// yha par ho rha he ki first me child aarha parents components and fir ve check kartha he ki
// localStroage me auth tho true nhi fir se login par bej do
