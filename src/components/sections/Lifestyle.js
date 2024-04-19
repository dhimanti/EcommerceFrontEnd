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
  &:nth-of-type(1) {
    background: url("https://plus.unsplash.com/premium_photo-1685287731619-df69b4877c11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(2) {
    background: url("https://images.unsplash.com/photo-1565895405127-481853366cf8?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(3) {
    background: url("https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(4) {
    background: url("https://images.unsplash.com/photo-1712709895347-21b980921fe2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(5) {
    background: url("https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(6) {
    background: url("https://images.unsplash.com/photo-1603161472885-39edf23d7a3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
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

function Lifestyle({ name, title }) {
  return (
    <ProfileCard>
      <div className="profile-content">
        <h2 style={{color:"palevioletred", fontSize:"30px;"}}>{name}</h2>
        <span>{title}</span>
      </div>
    </ProfileCard>
  );
}

function LifestyleContainer() {
  return (
    <div className="profile-container">
      <Lifestyle
        name="Books and Stationery"
        title="Creative Essentials"
      />
      <Lifestyle
        name="Gourmet Food and Beverages"
        title="Culinary Indulgences"
      />
      <Lifestyle
        name="Pets"
        title="Elite Petcare"
      />
      <Lifestyle
        name="Entertainment and Leisure"
        title="Refined Entertainment"
      />
      <Lifestyle
        name="Travel and Adventure"
        title="Wanderlust Wonders"
      />
      <Lifestyle
        name="Outdoor Living"
        title="Premium Outdoor Living"
      />
    </div>
  );
}

export default LifestyleContainer;
