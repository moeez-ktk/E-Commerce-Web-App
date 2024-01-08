import React from "react";

const PopularProducts = ({ popularProducts }) => {
  return (
    <div className="product-table item10 subcontainer">
      {popularProducts.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <p className="product-info ds">
            <span className="product-name ds">{`${product.name} #${product.id}`}</span>
          </p>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularProducts;
