import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./Admin/AddProduct";
import ProductList from "./Component/ProductList";
import AddProductdDetailsAll from "./Admin/AddProductdDetailsAll";
import AllProductList from "./Admin/AllProductList";
import ProductSingle from "./Component/ProductSingle";
import EditProductDetial from "./Admin/EditProductDetial";
import ProductProfile from "./Component/ProductProfile";
import AdminDashboard from "./Admin/AdminDashboard";
import Login from "./Admin/Login";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import PrivateRoute from "./Admin/PrivateRoute";

import Home from "./page/Home";
import Terms from "./Component/Terms";
import Privacy from "./Component/Privacy";
import AccountPage from "./Component/AccountPage";
import CartPage from "./Component/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productsingle/view/:id" element={<ProductSingle />} />
          <Route path="/product/:id" element={<ProductProfile />} />
          {/* <Route path="/auth" element={<AuthDrawer />} /> */}
          <Route path="/term" element={<Terms />} />
          <Route path="/privecy" element={<Privacy />} />
          <Route path="/accountpage" element={<AccountPage />} />
            <Route path="/cartpage" element={<CartPage/>}></Route>
        </Route>

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Admin Routes protected by PrivateRoute */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="product/add" element={<AddProductdDetailsAll />} />
          <Route path="product/addcate" element={<AddProduct />} />
          <Route path="product/list" element={<AllProductList />} />
          <Route path="product/edit/:id" element={<EditProductDetial />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
