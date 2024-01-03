import React, { useState } from 'react';

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveItem = () => {
    // Add logic to remove the item from the cart
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <div className="item-name">{item.name}</div>
        <div className="item-category">{item.category}</div>
      </div>
      <div className="item-price">${item.price.toFixed(2)}</div>
      <div className="quantity-container">
        <button className='counterbtn minus-btn' onClick={handleDecreaseQuantity}>—</button>
        <span className="quantity">{quantity}</span>
        <button className='counterbtn' onClick={handleIncreaseQuantity}>+</button>
      </div>
      <div className="total-price">${(item.price * quantity).toFixed(2)}</div>
      <button className="remove-button" onClick={handleRemoveItem}>
      &#x2715;
      </button>
    </div>
  );
};

export default Item;
