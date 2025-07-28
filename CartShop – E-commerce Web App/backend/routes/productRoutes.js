const express = require("express");
const multer = require("multer");
const path = require("path");
const ProductAdminApi = require("../Controllers/ProductAdminApi");

const router = express.Router();

// File upload config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../upload"));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });



// Routes

router.post("/addproduct", upload.single("image"), ProductAdminApi.createData);
router.post("/addproductall", upload.single("image"), ProductAdminApi.createDataAll);
router.get("/allproduct", ProductAdminApi.dataGetpro);// 2 feild fetch
router.get("/allproductpro", ProductAdminApi.dataGet);// all feild fetch
router.get("/getproduct/:id", ProductAdminApi.getProduct);// featch by id 
router.put("/updateproduct/:id", upload.single("image"), ProductAdminApi.updateProductData);
router.delete("/deleteproduct/:id", ProductAdminApi.deleteProductData);
router.get("/productsingle/view/:id", ProductAdminApi.productsingle);

module.exports = router;



