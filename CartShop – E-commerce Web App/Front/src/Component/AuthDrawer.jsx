// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../css/AuthDrawer.css";
// import userDataServices from "../Services/userDataServices";

// export default function AuthDrawer({ show, onClose, onAuthSuccess }) {
//   const [isLogin, setIsLogin] = useState(false);
//   const [userdata, setUserData] = useState({
//     useremail: "",
//     username: "",
//     userpass: "",
//   });
//   const usenavigate =useNavigate();
//   const [pshow, setPShow] = useState(false); // 👈 For toggling password visibility
//   const handleChange = (e) => {
//     setUserData({ ...userdata, [e.target.name]: e.target.value });
//   };
//   const validatePasswordStrength = (password) => {
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSymbol = /[^A-Za-z0-9]/.test(password);
//     const isLongEnough = password.length >= 8;

//     return hasUpperCase && hasLowerCase && hasNumber && hasSymbol && isLongEnough;
//   };

//   const handleSubmit = async () => {
//     try {
//       if (!isLogin) {
//         if (!validatePasswordStrength(userdata.userpass)) {
//           alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol.");
//           return;
//         }
//         const res = await userDataServices.create(userdata); // 👈 send plain JSON
//         onAuthSuccess(res.data.data);
//         setUserData({
//           useremail: "",
//           username: "",
//           userpass: "",
//         });
//       } else {
//         const res = await userDataServices.login(userdata);
//         // Save to localStorage (optional)
//         localStorage.setItem("user", JSON.stringify(res.data.data));
//         // Set login user in parent
//         onAuthSuccess(res.data.data);
//         setUserData({
//           useremail: "",
//           username: "",
//           userpass: "",
//         });
//         usenavigate("/accountpage");
//       }
//       //   onClose();
//     } catch (err) {
//       alert("Error occurred. Check console.");
//       console.log(err);
//     }
//   };

//   if (!show) return null;
//   return (
//     <>
//       <div className="auth-backdrop" onClick={onClose}></div>
//       <div className="auth-drawer open" onClick={(e) => e.stopPropagation()}>
//         <button className="close-btn" onClick={onClose}>
//           &#10007;
//         </button>
//         <div className="p-4">
//           <h4 className="fw-bold mb-3">{isLogin ? "Login" : "Sign Up"}</h4>
//           <p>
//             {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//             <button className="btn btn-link p-0 m-0" onClick={() => setIsLogin(!isLogin)}>
//               {isLogin ? "Sign up" : "Login"}
//             </button>
//           </p>

//           {!isLogin && <input value={userdata.username} onChange={handleChange} name="username" className="form-control mb-3" type="text" placeholder="Name" />}
//           <input value={userdata.useremail} onChange={handleChange} name="useremail" className="form-control mb-3" type="email" placeholder="Email" />
//           <div className="input-group">
//             <input
//               type={pshow ? "text" : "password"}
//               value={userdata.userpass}
//               onChange={handleChange}
//               name="userpass"
//               className="form-control"
//               placeholder="Password"
//             />
//             <button type="button" className="btn btn-outline-secondary" onClick={() => setPShow(!pshow)}>
//               {pshow ? "🙈 Hide" : "👁 Show"}
//             </button>
//           </div>
//           <small className="text-muted mb-3 d-block  danger">Password must contain at least 8 characters, uppercase, lowercase, number, and symbol.</small>
//           <button className="btn btn-warning w-100" onClick={handleSubmit}>
//             {isLogin ? "Login" : "Continue"}
//           </button>

//           <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
//             By {isLogin ? "logging in" : "creating an account"}, you agree to our{" "}
//             <Link to="/term" className="text-dark fw-bold">
//               Terms
//             </Link>{" "}
//             &{" "}
//             <Link to="/privecy" className="text-dark fw-bold">
//               Privacy
//             </Link>
//             .
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/AuthDrawer.css";
import userDataServices from "../Services/userDataServices";

export default function AuthDrawer({ show, onClose, onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(false);
  const [userdata, setUserData] = useState({
    useremail: "",
    username: "",
    userpass: "",
  });
  const [pshow, setPShow] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const validatePasswordStrength = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);
    return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSymbol;
  };

  const handleSubmit = async () => {
    try {
      if (!isLogin) {
        if (!validatePasswordStrength(userdata.userpass)) {
          alert("Password must be strong.");
          return;
        }
        const res = await userDataServices.create(userdata);
        onAuthSuccess(res.data.data);
      } else {
        const res = await userDataServices.login(userdata);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        onAuthSuccess(res.data.data);
        //navigate("/accountpage");
      }
      setUserData({ useremail: "", username: "", userpass: "" });
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  if (!show) return null;

  return (
    <>
      <div className="auth-backdrop" onClick={onClose}></div>
      <div className="auth-drawer open" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &#10007;
        </button>
        <div className="p-4">
          <h4 className="fw-bold mb-3">{isLogin ? "Login" : "Sign Up"}</h4>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button className="btn btn-link p-0 m-0" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>

          {!isLogin && <input value={userdata.username} onChange={handleChange} name="username" className="form-control mb-3" type="text" placeholder="Name" />}
          <input value={userdata.useremail} onChange={handleChange} name="useremail" className="form-control mb-3" type="email" placeholder="Email" />
          <div className="input-group mb-2">
            <input
              type={pshow ? "text" : "password"}
              value={userdata.userpass}
              onChange={handleChange}
              name="userpass"
              className="form-control"
              placeholder="Password"
            />
            <button type="button" className="btn btn-outline-secondary" onClick={() => setPShow(!pshow)}>
              {pshow ? "🙈 Hide" : "👁 Show"}
            </button>
          </div>

          <button className="btn btn-warning w-100 mb-2" onClick={handleSubmit}>
            {isLogin ? "Login" : "Continue"}
          </button>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            By {isLogin ? "logging in" : "creating an account"}, you agree to our{" "}
            <Link to="/term" className="text-dark fw-bold">
              Terms
            </Link>{" "}
            &{" "}
            <Link to="/privecy" className="text-dark fw-bold">
              Privacy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
