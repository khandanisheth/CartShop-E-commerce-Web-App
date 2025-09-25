const DB = require("../models/Product"); // 👈 'Product' model (sirf product ka naam aur image)
const allpro = require("../models/AllProduct"); // 👈 'AllProduct' model (full product detail)

// ✅ CREATE Product (sirf prname & image wala chhota product[ Categery ])
const createData = async (req, res) => {
    try {
        const { prname } = req.body;
        const image = req.file?.filename || "";
        const dataSave = new DB({ prname, image }); // 👈 Product schema me save karna
        await dataSave.save();
        res.status(201).json({
            success: true,
            message: "✅ Product Added Successfully",
            data: dataSave,
        });

    } catch (error) {
        console.error("Create Product Error:", error);
        res.status(500).json({
            success: false,
            message: "❌ Something went wrong while creating product",
            error,
        });
    }
};

// ✅ READ all short products (sirf prname + image wale)
const dataGetpro = async (req, res) => {
    try {
        const getData = await DB.find({}).sort({ _id: -1 }); // 👈 Latest first await DB.find({});
        res.status(200).json({
            success: true, msg: "✅ All Products Fetched Successfully", data: getData,
        });
    } catch (error) {
        res.status(500).json({
            success: false, msg: "❌ Failed to fetch products", error,
        });
    }
};

// ✅ CREATE full product (admin se full detail: name, brand, price, etc.)
const createDataAll = async (req, res) => {
    try {
        const { prname, prtitle, prbrand, prprice, prmessage } = req.body;
        const image = req.file?.filename || ""; // 👈 optional image

        const dataSave = new allpro({
            prname,
            prbrand,
            prtitle,
            prprice,
            prmessage,
            image,
        });

        await dataSave.save();
        res.status(201).json({
            success: true, message: "✅ Product Added Successfully", data: dataSave,
        });
    } catch (error) {
        console.error("Create Product Error:", error);
        res.status(500).json({
            success: false, message: "❌ Something went wrong while creating product",
            error,
        });
    }
};

// ✅ READ all full products (admin ke sare product detail)
const dataGet = async (req, res) => {
    try {
        const getData = await allpro.find({}).sort({ _id: -1 });
        res.status(200).json({
            success: true, msg: "✅ All Products Fetched Successfully", data: getData,
        });
    } catch (error) {
        res.status(500).json({
            success: false, msg: "❌ Failed to fetch products", error,
        });
    }
};

// ✅ UPDATE Product by ID (full product ka update including optional image)
const updateProductData = async (req, res) => {
    try {
        const id = req.params.id;
        const { prname, prtitle, prbrand, prprice, prmessage } = req.body;
        const updatedData = {
            prname,
            prbrand,
            prtitle,
            prprice,
            prmessage,
        };
        if (req.file?.filename) {
            updatedData.image = req.file.filename; // 👈 agar nayi image ayi to replace karo
        }
        const updatedProduct = await allpro.findByIdAndUpdate(id, updatedData, {
            new: true, // 👈 updated data return karega
        });

        res.status(200).json({
            success: true, msg: "✅ Product Updated Successfully", data: updatedProduct,
        });
    } catch (error) {
        res.status(500).json({
            success: false, msg: "❌ Server Error while updating product",
            error,
        });
    }
};

// ✅ DELETE Product by ID
const deleteProductData = async (req, res) => {
    try {
        const id = req.params.id;
        await allpro.findByIdAndDelete(id); // 👈 product ko delete karo
        res.status(200).json({
            success: true, msg: "✅ Product Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false, msg: "❌ Product Deletion Failed", error,
        });
    }
};

// ✅ READ: Get single Product by ID (detail page ke liye)
const getProduct = async (req, res) => {
    try {
        const product = await allpro.findById(req.params.id); // 👈 id se ek product laao
        if (!product) {
            return res.status(404).json({
                success: false, msg: "❌ Product not found",
            });
        }
        res.status(200).json({
            success: true, data: product,
        });
    } catch (error) {
        res.status(500).json({
            success: false, msg: "❌ Error getting product",
            error,
        });
    }
};

// // ✅ READ: Get all products matching a prname (category-wise)
// const productsingle = async (req, res) => {
//     try {
//         const category = await DB.findById(req.params.id); // 👈 Short DB me se prname lo
//         if (!category) {
//             return res.status(404).json({ success: false, msg: "Category not found" });
//         }
//         const items = await allpro.find({ prname: category.prname.toUpperCase() });
//         // 👈 full details walo me match karo
//         res.json({ success: true, msg: "Related items fetched", data: items });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, msg: "Server error" });
//     }
// }


const productsingle = async (req, res) => {
    try {
        // 🔹 Step 1: Pehle category ID se uska data lo
        const category = await DB.findById(req.params.id);// 1
        // 🔸 Agar category mili hi nahi toh error bhejo
        if (!category) {
            return res.status(404).json({
                success: false,
                msg: "Category not found",
            });
        }
        // 🔹 Step 2: Ab 'AllProduct' collection me se saare products fetch karo
        // jinka `prname` is category ke `prname` se match karta ho
        const items = await allpro.find({
            prname: category.prname.toUpperCase(), // 👈 Capital me match ho raha h
        });
        // 🔸 Step 3: Response bhejo client ko
        res.json({
            success: true,
            msg: "Related items fetched",
            data: items,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "Server error",
        });
    }
};



const PopularItems = async (req, res) => {
  try {
    const products = await allpro.find({ prmessage: { $gte: 4.5 } }).limit(8);
    res.json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};













// Export all controller methods
module.exports = { createData, dataGetpro, dataGet, getProduct, deleteProductData, updateProductData, createDataAll, productsingle,PopularItems };


// db.collection.find(query, projection)
// ⚙️ Parameters:
// | Parameter    | Description                             |
// | ------------ | --------------------------------------- |
// | `query`      | Kya search karna hai (filter condition) |
// | `projection` | Kaunse fields chahiye (optional)        |

// ____________________________________________________________________________________________________________________________________________________________
// | **Use Case**                 | **Query Syntax**                                                  | **Explanation (Hindi)**                               |
// | ---------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------- |
// | Saare documents laana        | `db.collection.find()`                                            | Collection ke **sabhi documents** fetch karega        |
// | Filter with exact value      | `db.users.find({ name: "Danish" })`                               | Sirf wahi documents jisme `name` = "Danish" ho        |
// | Specific fields (projection) | `db.users.find({ name: "Danish" }, { email: 1, _id: 0 })`         | Sirf `email` field show karega, `_id` hide hoga       |
// | Greater than (`$gt`)         | `db.products.find({ price: { $gt: 500 } })`                       | `price` 500 se bada ho to un products ko fetch karega |
// | Less than (`$lt`)            | `db.products.find({ price: { $lt: 1000 } })`                      | `price` 1000 se kam ho to un products ko fetch karega |
// | Multiple conditions (AND)    | `db.products.find({ category: "Mobile", price: { $lt: 10000 } })` | `category` Mobile ho **aur** `price` 10000 se kam ho  |
// | OR condition (`$or`)         | `db.users.find({ $or: [ { age: 20 }, { age: 25 } ] })`            | `age` 20 ya 25 ho to un users ko fetch karega         |
// | Find by ID (`_id`)           | `db.users.find({ _id: ObjectId("abc123...") })`                   | Specific ID ke document fetch karta hai               |
// | Regex/Partial match          | `db.users.find({ name: { $regex: "^Dan", $options: "i" } })`      | `name` Dan se start ho, case insensitive              |
// | Nested field search          | `db.orders.find({ "customer.name": "Danish" })`                   | Embedded document me `customer.name` search karta hai |


// 🔍 findById() Kya Karta Hai?
// | Feature       | Description (Hindi me)                                   |
// | ------------- | -------------------------------------------------------- |
// | **Purpose**   | Ek hi document ko laata hai jiska `_id` match karta ho   |
// | **Parameter** | `ObjectId` (jo MongoDB automatically generate karta hai) |
// | **Return**    | Ek single document (ya `null` agar nahi mila)            |
// | **Use case**  | Jab aapko ek specific record chahiye ID se               |



// findByIdAndDelete  findByIdAndUpdate
// | Method                | Purpose                      | Returns                                       | Extra Option       |
// | --------------------- | ---------------------------- | --------------------------------------------- | ------------------ |
// | `findByIdAndDelete()` | Document ko delete karta hai | Deleted document ya null                      | ❌                  |
// | `findByIdAndUpdate()` | Document ko update karta hai | Updated document (if `{ new: true }` diya ho) | ✔️ `{ new: true }` |


// 🔧 findByIdAndUpdate() me { new: true } kya karta hai?
// Jab aap MongoDB me kisi document ko update karte ho, to:
// By default, MongoDB old document return karta hai (update se pehle wala).
// Agar aap chahte ho ki update ke baad wala new document return ho, to aapko { new: true } dena padta hai.

// 📦 save() 
// kab use hota hai?
// Use Case	Kya karta hai
// ➕ Create	Naya document banake DB me save karta hai
// ✏️ Update	Agar document already load ho gaya ho, to uska data update kar sakte ho aur save() se update kar sakte ho

// 🔁 CRUD (Create, Read, Update, Delete) ke Important Mongoose Functions

// | Operation     | Function                    | Purpose / Explanation                 | Example                                        |
// | ------------- | --------------------------- | ------------------------------------- | ---------------------------------------------- |
// | 🟢 **Create** | `Model.create()`            | Naya document create + save ek saath  | `User.create({ name: "Ali" })`                 |
// | 🟢            | `new Model()` + `.save()`   | Pehle object banao, baad me save karo | `const u = new User(...); u.save()`            |
// | 🔵 **Read**   | `Model.find()`              | Multiple documents read (array me)    | `User.find({ city: "Jaipur" })`                |
// | 🔵            | `Model.findOne()`           | Sirf pehla match document             | `User.findOne({ email: "x@y.com" })`           |
// | 🔵            | `Model.findById()`          | ID se single document read            | `User.findById("64f...")`                      |
// | 🟡 **Update** | `Model.findByIdAndUpdate()` | ID ke through document update         | `User.findByIdAndUpdate(id, { age: 25 })`      |
// | 🟡            | `Model.updateOne()`         | First matched document update         | `User.updateOne({ name: "Ali" }, { age: 30 })` |
// | 🟡            | `Model.updateMany()`        | Multiple matched documents update     | `User.updateMany({}, { active: true })`        |
// | 🔴 **Delete** | `Model.findByIdAndDelete()` | ID ke through delete                  | `User.findByIdAndDelete(id)`                   |
// | 🔴            | `Model.deleteOne()`         | First matched document delete         | `User.deleteOne({ name: "Ali" })`              |
// | 🔴            | `Model.deleteMany()`        | Multiple documents delete             | `User.deleteMany({ city: "Delhi" })`           |
