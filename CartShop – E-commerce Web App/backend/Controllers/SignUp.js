const data = require("../models/UserDB");

const createData = async (req, res) => {
    try {
        const { useremail, username, userpass } = req.body;

        if (!useremail || !username || !userpass) {
            return res.status(400).json({
                success: false,
                message: "❌ Please fill all fields.",
            });
        }

        const dataSave = await new data({ useremail, username, userpass }).save();

        res.status(201).json({
            success: true,
            message: "✅ User Data Added Successfully",
            data: dataSave,
        });
    } catch (error) {
        console.error("User Data Error:", error);
        res.status(500).json({
            success: false,
            message: "❌ Something went wrong while saving user data",
            error,
        });
    }
};


const loginUser = async (req, res) => {
  try {
    const { useremail, userpass } = req.body;
    if (!useremail || !userpass) {
      return res.status(400).json({ success: false, message: "Please enter email and password." });
    }

    const user = await data.findOne({ useremail });
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found." });
    }

    if (user.userpass !== userpass) {
      return res.status(401).json({ success: false, message: "Incorrect password." });
    }

    res.status(200).json({ success: true, message: "Login successful", data: user });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

module.exports = { createData, loginUser };

