import React from "react";
import "./Cart.css";
import Item from "./Item";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Product A",
      category: "Ladies",
      price: 29.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Product B",
      category: "Gents",
      price: 39.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    // Add more cart items as needed
  ];

  return (
    <div className="cart_bg">
      <div className="cart-container">
        <h2 className="cart-header">YOUR CART</h2>
        <div className="cart-items">
            <div className="item-header">
                <p>PRODUCT</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>TOTAL</p>
            </div>
          {cartItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
