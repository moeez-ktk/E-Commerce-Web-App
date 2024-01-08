import React from "react";

const ProuctsTable = ({ products }) => {
  return (
    <div className="item7 subcontainer2">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Items in Stock</th>
            <th>Items Sold</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.sold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProuctsTable;
