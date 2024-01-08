import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import "./ProductForm.css";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("male");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const upload = () => {
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("category", category);
    formData.append("price", price);

    files.forEach((file, index) => {
      const fileName = `${productName} ${index + 1}`;
      formData.append("files", file, fileName);
    });

    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => {
        // Handle success
        console.log(res.data);
      })
      .catch((err) => {
        // Handle error
        console.error(err);
      });
  };

  return (
    <div className="item11 product-form-container">
      <form className="product-form">
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            className="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            className="form-control"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? "active" : ""}`}
          >
            <input {...getInputProps()} />
            {files.length > 0 ? (
              <div>
                <p>Selected files:</p>
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview-${index}`}
                        className="preview-image"
                      />
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Drag & drop images here, or click to select files</p>
            )}
          </div>
        </div>

        <button type="button" onClick={upload} className="submit-button">
          Add New Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
