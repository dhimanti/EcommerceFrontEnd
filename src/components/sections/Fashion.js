import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../css/grid.css';

function Fashion({ name, title, onClick }) {
  

  return (
    <div className="profile-card" onClick={onClick}>
      <div className="profile-content">
        <h2 style={{ color: "palevioletred", fontSize: "30px;" }}>{name}</h2>
        <span>{title}</span>
      </div>
    </div>
  );
}

function FashionContainer() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/allCategory')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data.category);
        setCategories(data.category);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);
  
  const handleClick = (categoryName) => {
    // Find the category object with the matching name
    const selectedCategory = categories.find(category => category.name === categoryName);

    // If category is found, navigate to the appropriate route with state
    if (selectedCategory) {
      navigate('/products', { state: { categoryId: selectedCategory._id } });
    } else {
      navigate('/empty');
      console.log(`Category not found: ${categoryName}`);
    }
  };



  return (
    <>
      <div className="profile-container">
        <Fashion
          name="Indian Wear"
          title="Traditional Elegance"
          onClick={() => handleClick("Indian Wear")}
        />
        <Fashion
          name="Western Wear"
          title="Contemporary Style"
          onClick={() => handleClick("Western Wear")}
        />
        <Fashion
          name="Footwear"
          title="Fashionable Comfort"
          onClick={() => handleClick("Footwear")}
        />
        <Fashion
          name="Accessories"
          title="Timeless Glamour"
          onClick={() => handleClick("Accessories")}
        />
        <Fashion
          name="Bags"
          title="Functional Chic"
          onClick={() => handleClick("Bags")}
        />
        <Fashion
          name="Kids"
          title="Playful Cuteness"
          onClick={() => handleClick("Kids")}
        />
      </div>
    </>
  );
}

export default FashionContainer;