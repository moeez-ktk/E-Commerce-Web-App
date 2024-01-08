import React from "react";

const CustomersTable = ({customers}) => {
  return (
    <div className="item9 subcontainer2">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th className="hide_col2">Email</th>
            <th className="hide_col2">Phone Number</th>
            <th className="hide_col">Address</th>
            <th className="hide_col">Total Orders</th>
            <th className="hide_col">Total Spend</th>
            <th className="hide_col">Registration Date</th>
            <th className="hide_col">Last Login Date</th>
            <th className="hide_col">Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>
              <td>{customer.name}</td>
              <td className="hide_col2">{customer.email}</td>
              <td className="hide_col2">{customer.phoneNumber}</td>
              <td className="hide_col">{customer.address}</td>
              <td className="hide_col">{customer.totalOrders}</td>
              <td className="hide_col">${customer.totalSpend.toFixed(2)}</td>
              <td className="hide_col">{customer.registrationDate}</td>
              <td className="hide_col">{customer.lastLoginDate}</td>
              <td className="hide_col">{customer.status}</td>
              <td>
                {/* Add action buttons/links here */}
                <button
                  className="actionbtn"
                  onClick={() => handleViewDetails(customer.customerId)}
                >
                  View Details
                </button>
                {/* Add other action buttons/links as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
