import React from 'react';
import styled from 'styled-components';

const ProfileCard = styled.div`
  flex: 0 0 150px;
  border-radius: 0.5rem;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  box-shadow: 1px 5px 15px #1e0e3e;
  position: relative;
  overflow: hidden;
  // https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  &:nth-of-type(1) {
    background: url("https://plus.unsplash.com/premium_photo-1677283511670-693a546c484a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(2) {
    background: url("https://images.unsplash.com/photo-1587689434075-6d96857f594d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(3) {
    background: url("https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(4) {
    background: url("https://images.unsplash.com/photo-1608979087030-1a1ab4d262c1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(5) {
    background: url("https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(6) {
    background: url("https://images.unsplash.com/photo-1553265331-3032aacd1a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(7) {
    background: url("https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(8) {
    background: url("https://plus.unsplash.com/premium_photo-1663126508022-a53a937784a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }

  // Add more styles for other nth-of-type cases...

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
    flex: 0 0 250px;
    box-shadow: 1px 3px 15px #7645d8;
    transform: translateY(-30px);
  }

  &:hover .profile-content {
    opacity: 1;
    transform: translateY(0%);
    visibility: visible;
  }
`;

function BeautyandGrooming({ name, title }) {
  return (
    <ProfileCard>
      <div className="profile-content">
        <h2 style={{color:"palevioletred", fontSize:"30px;"}}>{name}</h2>
        <span>{title}</span>
      </div>
    </ProfileCard>
  );
}

function BeautyandGroomingContainer() {
  return (
    <div className="profile-container">
      <BeautyandGrooming
        name="Skincare"
        title="Radiant Wellness"
      />
      <BeautyandGrooming
        name="Haircare"
        title="Stylish Confidence"
      />
      <BeautyandGrooming
        name="Fragrance"
        title="Scented Sophistication"
      />
      <BeautyandGrooming
        name="Makeup"
        title="Versatile Beauty"
      />
      <BeautyandGrooming
        name="Personal Hygiene"
        title="Fresh Vitality"
      />
      <BeautyandGrooming
        name="Grooming Tools"
        title="Efficient Elegance"
      />
      <BeautyandGrooming
        name="Natural and Organic"
        title="Pure Harmony"
      />
      <BeautyandGrooming
        name="Anti-aging: Products"
        title="Timeless Vitality"
      />
    </div>
  );
}

export default BeautyandGroomingContainer;
