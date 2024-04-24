import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfileCard = styled.div`
    flex: 0 0 200px;
    border-radius: 0.5rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    box-shadow: 1px 5px 15px #1e0e3e;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: 50% 50%;

    .profile-content {
      font-size: 1.5rem;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 15px;
      opacity: 0;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      background: rgb(2, 2, 46);
      background: linear-gradient(
        0deg,
        rgba(2, 2, 46, 0.6755077030812324) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: translateY(100%);
      transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
      visibility: hidden;
  
      span {
        display: block;
        margin-top: 5px;
        font-size: 1.2rem;
      }
    }
  
    &:hover {
      flex: 0 0 300px;
      box-shadow: 1px 3px 15px #7645d8;
      transform: translateY(-30px);
    }
  
    &:hover .profile-content {
      opacity: 1;
      transform: translateY(0%);
      visibility: visible;
    }
  `;


function Category({ sectionName }) {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/categoryBySection/${sectionName}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw new Error("Failed to fetch");
                }
            })
            .then(data => {
                // console.log(data.data);
                setCategory(data.data);
            })
            .catch(err => {
                console.log("Error is : ", err);
            })
    }, [sectionName])


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
        const selectedCategory = categories.find(category => category.name === categoryName);

        if (selectedCategory) {
            navigate('/products', { state: { categoryId: selectedCategory._id, categoryName: categoryName, sectionName: sectionName } });
        } else {
            navigate('/empty');
            console.log(`Category not found: ${categoryName}`);
        }
    };

    return (
        <>
            <div className="profile-container">
                {category.map((item, index) => (
                    <ProfileCard key={index} style={{ backgroundImage: `url(${item.image})` }} onClick={() => handleClick(item.name)}>
                        <div className="profile-content">
                            <h2 style={{ color: "palevioletred", fontSize: "30px;" }}>{item.name}</h2>
                            <span>{item.title}</span>
                        </div>
                    </ProfileCard>
                ))}
            </div>
        </>
    )
}

export default Category;