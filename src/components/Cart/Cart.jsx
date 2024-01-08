import React, { useState } from "react";
import "./Cart.css";
import Item from "./Item";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Cart = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [shippingCost, setShippingCost] = useState(0);

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

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    // Add logic to set shipping cost based on the selected city
    // You can fetch shipping rates or calculate them based on your business logic
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + shippingCost;
  };

  const handleProceedToCheckout = () => {
    // Add logic to navigate to the checkout page
  };

  const handleContinueShopping = () => {
    // Add logic to navigate to the shopping page
  };

  return (
    <div className="cart_bg">
      <Navbar/>
      <h2 className="cart-header">YOUR CART</h2>
      <div className="cart-container">
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
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div>
            <div className="subtotal">
              <strong>Subtotal</strong>
              <p> {` $${calculateSubtotal().toFixed(2)}`}</p>
            </div>
            <div className="cart-city-dropdown">
              <strong>Get Shipping Estimate:</strong>
              <select value={selectedCity} onChange={handleCityChange}>
                <option value="">Select a city</option>
                {/* Add options for different cities */}
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="grand-total">
              <strong>Total:</strong>
              <p>{` $${calculateTotal().toFixed(2)}`}</p>
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
