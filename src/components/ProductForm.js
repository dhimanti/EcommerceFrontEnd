import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    SKUs: '',
    image: '',
    discount: '',
    rating: '',
    category: '',
    section: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:4000/product', {
      method : 'POST',
      body : JSON.stringify(formData),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <center>
        <div style={{ width: "500px", display: "block", border: "solid blue 2px", margin: "20px", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <h5 style={{ display: "inline", marginRight: "10px" }}>Name:</h5>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <h5 style={{ display: "inline", marginRight: "10px" }}>Description:</h5>
              <input type="text" name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <h5 style={{ display: "inline", marginRight: "10px" }}>Price:</h5>
              <input type="number" name="price" value={formData.price} onChange={handleChange} required />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <h5 style={{ display: "inline", marginRight: "10px" }}>SKUs:</h5>
              <input type="number" name="SKUs" value={formData.SKUs} onChange={handleChange} required />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <h5 style={{ display: "inline", marginRight: "10px" }}>Image:</h5>
              <input type="text" name="image" value={formData.image} onChange={handleChange} required />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <h5 style={{ display: "inline", marginRight: "10px" }}>Discount:</h5>
              <input type="text" name="discount" value={formData.discount} onChange={handleChange} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <h5 style={{ display: "inline", marginRight: "10px" }}>Rating:</h5>
              <input type="number" name="rating" value={formData.rating} onChange={handleChange} min="0" max="5" />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <h5 style={{ display: "inline", marginRight: "10px" }}>Category ID:</h5>
              <input type="text" name="category" value={formData.category} onChange={handleChange} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <h5 style={{ display: "inline", marginRight: "10px" }}>Section ID:</h5>
              <input type="text" name="section" value={formData.section} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </center>
    </>
  );
};

export default ProductForm;




