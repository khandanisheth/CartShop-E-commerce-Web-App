import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);

    // Calculate total
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.prprice || 0), 0);
    setTotal(totalPrice);
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* 🛒 Left Side - Cart Items */}
        <div className="col-lg-8">
          <h4 className="mb-3">My Cart ({cartItems.length})</h4>
          {cartItems.length === 0 ? (
            <div className="alert alert-info">Your cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center p-3">
                  {/* Image */}
                  <div className="col-md-3 text-center">
                    <img
                      src={`http://localhost:8001/upload/${item.image}`}
                      alt={item.prname}
                      className="img-fluid rounded"
                      style={{ maxHeight: "150px", objectFit: "contain" }}
                    />
                  </div>

                  {/* Details */}
                  <div className="col-md-9">
                    <div className="card-body">
                      <h6 className="fw-bold">{item.prbrand}</h6>
                      <p className="text-muted mb-1">{item.prtitle}</p>
                      <p className="fw-bold text-success fs-5">₹{item.prprice}</p>
                      <p className="text-warning small">⭐ {item.prmessage}</p>

                      <div className="d-flex gap-3 mt-3">
                        <button className="btn btn-outline-secondary btn-sm">SAVE FOR LATER</button>
                        {/* <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => {
                            const updated = cartItems.filter((c) => c._id !== item._id);
                            setCartItems(updated);
                            localStorage.setItem("cart", JSON.stringify(updated));

                            const totalPrice = updated.reduce((sum, i) => sum + parseFloat(i.prprice || 0), 0);
                            setTotal(totalPrice);
                          }}
                        >
                          REMOVE
                        </button> */}

                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => {
                            const updated = cartItems.filter((c) => c._id !== item._id);
                            setCartItems(updated);
                            localStorage.setItem("cart", JSON.stringify(updated));

                            const totalPrice = updated.reduce((sum, i) => sum + parseFloat(i.prprice || 0), 0);
                            setTotal(totalPrice);

                            // 🔔 Header ko update karne ke liye event fire karo
                            window.dispatchEvent(new Event("cartUpdated"));
                          }}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 💰 Right Side - Price Details */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-3">
            <h5 className="border-bottom pb-2">PRICE DETAILS</h5>
            <div className="d-flex justify-content-between my-2">
              <span>Price ({cartItems.length} items)</span>
              <span>₹{total}</span>
            </div>
            <div className="d-flex justify-content-between my-2 text-success">
              <span>Discount</span>
              <span>- ₹0</span>
            </div>
            <div className="d-flex justify-content-between my-2">
              <span>Delivery Charges</span>
              <span className="text-success">FREE</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>
            <p className="text-success small mt-2">You will save ₹0 on this order</p>
            <button className="btn btn-warning w-100 mt-3 fw-bold">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h3>Your Cart</h3>
//       {cartItems.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item._id} className="card mb-3 p-3">
//             <p>
//               <strong>Name:</strong> {item.prname}
//             </p>
//             <p>
//               <strong>Title:</strong> {item.prtitle}
//             </p>
//             <p>
//               <strong>Brand:</strong> {item.prbrand}
//             </p>
//             <p>
//               <strong>Price:</strong> ₹{item.prprice}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
