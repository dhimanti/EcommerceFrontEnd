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
    background: url("https://plus.unsplash.com/premium_photo-1679809447949-b15690ccf840?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhhbmRjcmFmdGVkJTIwZ2lmdHMlMjBmcm9tJTIwbG9jYWwlMjBhcnRpc2FucyUyQyUyMGluY2x1ZGluZyUyMHBvdHRlcnklMkMlMjB0ZXh0aWxlcyUyQyUyMGFuZCUyMGFydGlzYW5hbCUyMGZvb2RzfGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(2) {
    background: url("https://plus.unsplash.com/premium_photo-1661871531287-9db3da186f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2lmdCUyMHZvdWNoZXJzJTIwZm9yJTIwd2VsbG5lc3MlMjByZXRyZWF0cyUyMG9yJTIwc3BhJTIwZ2V0YXdheXMlMjB0byUyMHJlanV2ZW5hdGUlMjBtaW5kJTIwYW5kJTIwYm9keXxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(3) {
    background: url("https://plus.unsplash.com/premium_photo-1696824306174-333ed6b38479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGx1eGUlMjBTdWJzY3JpcHRpb24lMjBCb3hlcyUyMGdpZnRzfGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(4) {
    background: url("https://images.unsplash.com/photo-1682687982107-14492010e05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fEFkdmVudHVyZSUyMEV4cGVyaWVuY2VzfGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(5) {
    background: url("https://plus.unsplash.com/premium_photo-1698117060199-718b666d6500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVtb3J5JTIwTWFraW5nJTIwS2l0cyUzQSUyMERJWSUyMGtpdHMlMjBmb3IlMjBjcmVhdGluZyUyMGxhc3RpbmclMjBtZW1vcmllcyUyQyUyMHN1Y2glMjBhcyUyMHNjcmFwYm9va2luZyUyMHNldHMlMkMlMjBESVklMjBwaG90b2dyYXBoeSUyMGtpdHMlMkMlMjBvciUyMG1lbW9yeSUyMGphciUyMGtpdHN8ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(6) {
    background: url("https://images.unsplash.com/photo-1537089521202-eea9ded4aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fENvb2tpbmclMjBjbGFzc2VzJTJDJTIwd2luZSUyMHRhc3RpbmclMjB0b3VycyUyQyUyMG9yJTIwZ291cm1ldCUyMGRpbmluZyUyMGV4cGVyaWVuY2VzJTIwYXQlMjBNaWNoZWxpbiUyMHN0YXJyZWQlMjByZXN0YXVyYW50c3xlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(7) {
    background: url("https://plus.unsplash.com/premium_photo-1661962303221-621bbb2778f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V29ya3Nob3BzJTIwb3IlMjBvbmxpbmUlMjBjb3Vyc2VzJTIwZm9jdXNlZCUyMG9uJTIwcGVyc29uYWwlMjBncm93dGglMkMlMjBjcmVhdGl2aXR5JTJDJTIwb3IlMjBza2lsbCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(8) {
    background: url("https://images.unsplash.com/photo-1596097198305-e4844a56ddb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3VzdGFpbmFibGUlMjBMaXZpbmd8ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(9) {
    background: url("https://plus.unsplash.com/premium_photo-1663036405014-3b4f2713633c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFBldCUyMHNwYXxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(10) {
    background: url("https://images.unsplash.com/photo-1670028514318-0ac718c0590d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fENvbmNlcnRzJTIwYW5kJTIwRXZlbnRzfGVufDB8fDB8fHww")
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

function Gifts({ name, title }) {
  return (
    <ProfileCard>
      <div className="profile-content">
        <h2 style={{color:"palevioletred", fontSize:"30px;"}}>{name}</h2>
        <span>{title}</span>
      </div>
    </ProfileCard>
  );
}

function GiftsContainer() {
  return (
    <div className="profile-container">
      <Gifts
        name="Artisanal Delights"
        title="Local Craftsmanship"
      />
      <Gifts
        name="Wellness Retreats"
        title="Spa Escapes"
      />
      <Gifts
        name="Subscription Boxes"
        title="Curated Delights"
      />
      <Gifts
        name="Adventure Experiences"
        title="Thrilling Escapades"
      />
      <Gifts
        name="Memory-Making Kits"
        title="DIY Memories"
      />
      <Gifts
        name="Culinary Experiences"
        title="Gourmet Adventures"
      />
      <Gifts
        name="Personal Development"
        title="Growth Workshops"
      />
      <Gifts
        name="Sustainable Living"
        title="Eco-friendly Solutions"
      />
      <Gifts
        name="Pet Pampering"
        title="Furry Luxuries"
      />
      <Gifts
        name="Concerts and Events"
        title="Entertainment Excitement"
      />
    </div>

  );
}

export default GiftsContainer;
