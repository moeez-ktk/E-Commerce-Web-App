import React, { useState } from "react";
import "./Admin.css";
import logo from "../../imgs/logo.png";
import { FaChartBar } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import ProductForm from "./ProductForm/ProductForm";
import Statistics from "./Statistics/Statistics";
import LineChart from "./Charts/Charts";
import PopularProducts from "./PopularProducts/PopularProducts";
import ProuctsTable from "./Tables/ProductsTable";
import OrdersTable from "./Tables/OrdersTable";
import CustomersTable from "./Tables/CustomersTable";

// Tabs Data

const tabs = [
  { logo: <FaChartBar className="tab_logo" />, name: "Statistics" },
  { logo: <FaTruck className="tab_logo" />, name: "Orders" },
  { logo: <GiClothes className="tab_logo" />, name: "Items" },
  { logo: <IoPeopleSharp className="tab_logo" />, name: "Customers" },
];

const Tab = ({ logo, name }) => {
  return (
    <div className="tab ds">
      {logo}
      {name}
    </div>
  );
};

// Tables Data

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 20,
    stock: 50,
    sold: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Product 2",
    price: 30,
    stock: 40,
    sold: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Product 3",
    price: 20,
    stock: 50,
    sold: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Product 4",
    price: 30,
    stock: 40,
    sold: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const orders = [
  {
    orderId: 1,
    items: [101, 102, 105],
    customerName: "John Doe",
    orderDate: "2024-01-01",
    shippingAddress: "123 Main St, Cityville",
    totalAmount: 150.99,
    status: "Shipped",
    paymentMethod: "Credit Card",
  },
  {
    orderId: 2,
    items: [103, 104],
    customerName: "Jane Smith",
    orderDate: "2024-01-02",
    shippingAddress: "456 Oak St, Townsville",
    totalAmount: 75.5,
    status: "Processing",
    paymentMethod: "PayPal",
  },
  // Add more orders as needed
];

const customers = [
  {
    customerId: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Cityville",
    totalOrders: 10,
    totalSpend: 500.99,
    registrationDate: "2024-01-01",
    lastLoginDate: "2024-01-15",
    status: "Active",
  },
  {
    customerId: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
    address: "456 Oak St, Townsville",
    totalOrders: 5,
    totalSpend: 250.5,
    registrationDate: "2024-01-02",
    lastLoginDate: "2024-01-14",
    status: "Inactive",
  },
];

const popularProducts = [
  {
    id: 1,
    name: "Product A",
    price: 29.99,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Product B",
    price: 39.99,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Product C",
    price: 49.99,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Product A",
    price: 29.99,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Product B",
    price: 39.99,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const TopBar = () => {
  // SEARCH BAR
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Add your search logic here
    console.log("Searching for:", query);
  };
  return (
    <div className="topbar">
      <div className="ds search">
        <button className="ds" onClick={handleSearch}>
          <IoSearchSharp className="search_icon" />
        </button>
        <input
          className="ds"
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const Admin = () => {
  return (
    <>
      <div className="bgcol">
        <TopBar />
        <aside>
          <div id="logo">
            <img src={logo} alt="logo" id="logo_img" />
            LOGO
          </div>

          <div id="tabs" className="ds">
            {tabs.map((tab) => (
              <Tab logo={tab.logo} name={tab.name} />
            ))}
          </div>
        </aside>
        <div className="admin-container">
          <Statistics />
          <LineChart />
          <PopularProducts popularProducts={popularProducts} />
          <ProuctsTable products={products} />
          <OrdersTable orders={orders} />
          <CustomersTable customers={customers} />
          <ProductForm />
          <div className="empty-space"></div>
        </div>
      </div>
    </>
  );
};

export default Admin;
