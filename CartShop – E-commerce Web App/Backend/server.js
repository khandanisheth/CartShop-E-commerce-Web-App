const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/Cart")
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ Mongo Error:", err));

// Routes
const dataRoutes = require("./routes/productRoutes"); // Your product routes
const UserSigUpRoutes = require("./routes/SignUpRoutes");

// Admin Data Routes 
app.use("/proadminapi", dataRoutes);
// Static image folder for uploaded files
app.use("/upload", express.static(path.join(__dirname, "upload")));
// User Sign Up Routes
app.use("/user", UserSigUpRoutes);






// Server
const PORT = 8001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
