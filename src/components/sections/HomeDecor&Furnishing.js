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
    background: url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(2) {
    background: url("https://plus.unsplash.com/premium_photo-1706800283323-e9f633ccad85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEx1eHVyeSUyMHZhc2VzJTJDJTIwc2N1bHB0dXJlcyUyQyUyMGNhbmRsZXMlMkMlMjBhbmQlMjBkZWNvcmF0aXZlJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(3) {
    background: url("https://plus.unsplash.com/premium_photo-1677015055452-825b8e391883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fERlc2lnbmVyJTIwbGFtcHMlMkMlMjBjaGFuZGVsaWVyc3xlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(4) {
    background: url("https://images.unsplash.com/photo-1580229080435-1c7e2ce835c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxSdWdzJTIwYW5kJTIwQ2FycGV0c3xlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(5) {
    background: url("https://plus.unsplash.com/premium_photo-1670869816831-c68339e55eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fEJlZGRpbmclMjBhbmQlMjBMaW5lbnN8ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(6) {
    background: url("https://plus.unsplash.com/premium_photo-1679634980848-3eac70956469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmluZSUyMGFydCUyMHByaW50cyUyQyUyMGNhbnZhcyUyMHBhaW50aW5ncyUyQyUyMGFuZCUyMGZyYW1lZCUyMGFydHdvcmtzfGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(7) {
    background: url("https://plus.unsplash.com/premium_photo-1681449855827-295c626f7b84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THV4dXJ5JTIwY3VydGFpbnMlMkMlMjBkcmFwZXN8ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(8) {
    background: url("https://images.unsplash.com/photo-1530023367847-a683933f4172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFuY3klMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(9) {
    background: url("https://images.unsplash.com/photo-1611800065723-e812556a85a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGZyYWdyYW5jZXxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(10) {
    background: url("https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
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

function HomeDecorandFurnishing({ name, title }) {
  return (
    <ProfileCard>
      <div className="profile-content">
        <h2 style={{color:"palevioletred", fontSize:"30px;"}}>{name}</h2>
        <span>{title}</span>
      </div>
    </ProfileCard>
  );
}

function HomeDecorandFurnishingContainer() {
  return (
    <div className="profile-container">
      <HomeDecorandFurnishing
        name="Furniture"
        title="Elegant Comfort"
      />
      <HomeDecorandFurnishing
        name="Décor Accessories"
        title="Artistic Charm"
      />
      <HomeDecorandFurnishing
        name="Lighting"
        title="Ambient Illumination"
      />
      <HomeDecorandFurnishing
        name="Rugs and Carpets"
        title="Plush Luxury"
      />
      <HomeDecorandFurnishing
        name="Bedding and Linens"
        title="Serene Opulence"
      />
      <HomeDecorandFurnishing
        name="Wall Art"
        title="Timeless Beauty"
      />
      <HomeDecorandFurnishing
        name="Home Textiles"
        title="Soft Sophistication"
      />
      <HomeDecorandFurnishing
        name="Tableware"
        title="Stylish Elegance"
      />
      <HomeDecorandFurnishing
        name="Home Fragrances"
        title="Inviting Aroma"
      />
      <HomeDecorandFurnishing
        name="Storage Solutions"
        title="Organized Elegance"
      />
    </div>
  );
}

export default HomeDecorandFurnishingContainer;
