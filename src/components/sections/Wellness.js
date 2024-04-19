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
    background: url("https://plus.unsplash.com/premium_photo-1700053459853-93b2ed81a55b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEhpZ2glMjBxdWFsaXR5JTIwdml0YW1pbnMlMkMlMjBtaW5lcmFscyUyQyUyMGFuZCUyMGRpZXRhcnklMjBzdXBwbGVtZW50cy58ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(2) {
    background: url("https://images.unsplash.com/photo-1540558870477-e8c59bf88421?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Rml0bmVzcyUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(3) {
    background: url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWluZGZ1bG5lc3MlMjBhbmQlMjBNZWRpdGF0aW9ufGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(4) {
    background: url("https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(5) {
    background: url("https://plus.unsplash.com/premium_photo-1675624949127-9add08a24bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEhlYWx0aCUyME1vbml0b3Jpbmd8ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(6) {
    background: url("https://images.unsplash.com/photo-1553744562-96972ff3cd46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmF0dXJhbCUyMFJlbWVkaWVzfGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(7) {
    background: url("https://images.unsplash.com/photo-1495197359483-d092478c170a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fFNsZWVwJTIwRXNzZW50aWFsc3xlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(8) {
    background: url("https://plus.unsplash.com/premium_photo-1679518410151-e0361fc8cf43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEh5ZHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(9) {
    background: url("https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fEhlYWx0aHklMjBMaWZlc3R5bGUlMjBCb29rc3xlbnwwfHwwfHx8MA%3D%3D")
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

function Wellness({ name, title }) {
  return (
    <ProfileCard>
      <div className="profile-content">
        <h2 style={{color:"palevioletred", fontSize:"30px;"}}>{name}</h2>
        <span>{title}</span>
      </div>
    </ProfileCard>
  );
}

function WellnessContainer() {
  return (
    <div className="profile-container">
      <Wellness
        name="Nutrition and Supplements"
        title="Vital Wellness"
      />
      <Wellness
        name="Fitness Equipment"
        title="Active Essentials"
      />
      <Wellness
        name="Mindfulness and Meditation"
        title="Serene Balance"
      />
      <Wellness
        name="Spa and Relaxation"
        title="Tranquil Retreat"
      />
      <Wellness
        name="Health Monitoring"
        title="Wellness Tracking"
      />
      <Wellness
        name="Natural Remedies"
        title="Holistic Healing"
      />
      <Wellness
        name="Sleep Essentials"
        title="Restful Comfort"
      />
      <Wellness
        name="Hydration Solutions"
        title="Refreshing Hydration"
      />
      <Wellness
        name="Healthy Lifestyle Books"
        title="Wellness Wisdom"
      />
    </div>
  );
}

export default WellnessContainer;
