import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} className="card mb-3 p-3">
            <p>
              <strong>Name:</strong> {item.prname}
            </p>
            <p>
              <strong>Title:</strong> {item.prtitle}
            </p>
            <p>
              <strong>Brand:</strong> {item.prbrand}
            </p>
            <p>
              <strong>Price:</strong> ₹{item.prprice}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
