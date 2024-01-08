import React from "react";

const OrdersTable = ({ orders }) => {
  return (
    <div className="item8 subcontainer2">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th className="hide_col2">Items</th>
            <th>Customer Name</th>
            <th className="hide_col">Order Date</th>
            <th className="hide_col2">Shipping Address</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th className="hide_col">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td className="hide_col2">{order.items.join(", ")}</td>
              <td>{order.customerName}</td>
              <td className="hide_col">{order.orderDate}</td>
              <td className="hide_col2">{order.shippingAddress}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>{order.status}</td>
              <td className="hide_col">{order.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
