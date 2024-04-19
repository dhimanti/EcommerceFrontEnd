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
    background: url("https://plus.unsplash.com/premium_photo-1683380296653-56dd1cec32da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEFkdmVudHVyZSUyMEV4cGVyaWVuY2VzJTNBJTIwVGhyaWxsaW5nJTIwZXNjYXBhZGVzJTIwbGlrZSUyMHNreWRpdmluZyUyQyUyMGJ1bmdlZSUyMGp1bXBpbmclMkMlMjBvciUyMHJvY2slMjBjbGltYmluZy58ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(2) {
    background: url("https://plus.unsplash.com/premium_photo-1683707120402-2192c7aad00c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fEN1bGluYXJ5JTIwRXhwZXJpZW5jZXMlM0ElMjBHb3VybWV0JTIwY29va2luZyUyMGNsYXNzZXMlMkMlMjB3aW5lJTIwdGFzdGluZyUyMHRvdXJzJTJDJTIwb3IlMjBjaGVmJTIwbGVkJTIwZGluaW5nJTIwZXhwZXJpZW5jZXMufGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(3) {
    background: url("https://plus.unsplash.com/premium_photo-1679522168386-7f4735bdbf69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFdlbGxuZXNzJTIwUmV0cmVhdHMlM0ElMjBSZWxheGluZyUyMHNwYSUyMGdldGF3YXlzJTJDJTIweW9nYSUyMHJldHJlYXRzJTJDJTIwb3IlMjBtZWRpdGF0aW9uJTIwd29ya3Nob3BzLnxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(4) {
    background: url("https://plus.unsplash.com/premium_photo-1661960010520-c013fe4ddfec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEN1bHR1cmFsJTIwRXhwZXJpZW5jZXMlM0ElMjBHdWlkZWQlMjB0b3VycyUyMG9mJTIwaGlzdG9yaWNhbCUyMGxhbmRtYXJrcyUyQyUyMGFydCUyMGdhbGxlcmllcyUyQyUyMG9yJTIwbXVzZXVtcy58ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(5) {
    background: url("https://plus.unsplash.com/premium_photo-1661893485258-27f6cda8cf42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fE91dGRvb3JjJTIwQWR2ZW50dXJlcyUzQSUyME5hdHVyZSUyMGhpa2VzJTJDJTIwa2F5YWtpbmclMjB0cmlwcyUyQyUyMG9yJTIwd2lsZGxpZmUlMjBzYWZhcmlzJTIwaW4lMjBzY2VuaWMlMjBsb2NhdGlvbnMufGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(6) {
    background: url("https://plus.unsplash.com/premium_photo-1680831748191-d726a2f7b201?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(7) {
    background: url("https://plus.unsplash.com/premium_photo-1705717318393-fc1b452f6de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3JlYXRpdmUlMjBXb3Jrc2hvcHMlM0ElMjBQYWludGluZyUyMGNsYXNzZXMlMkMlMjBwb3R0ZXJ5JTIwd29ya3Nob3BzJTJDJTIwb3IlMjBwaG90b2dyYXBoeSUyMHJldHJlYXRzLnxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(8) {
    background: url("https://plus.unsplash.com/premium_photo-1661891213681-1be4a05ac794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWRyZW5hbGluZSUyMFJ1c2glMjBFeHBlcmllbmNlcyUzQSUyMFJhY2UlMjBjYXIlMjBkcml2aW5nJTJDJTIwamV0JTIwc2tpJTIwYWR2ZW50dXJlcyUyQyUyMG9yJTIwZXh0cmVtZSUyMHNwb3J0cyUyMGV4cGVyaWVuY2VzLnxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(9) {
    background: url("https://images.unsplash.com/photo-1598515750914-e4d9c650b68b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TXVzaWMlMjBhbmQlMjBFbnRlcnRhaW5tZW50JTNBJTIwdGhlYXRlciUyMHNob3dzJTJDfGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(10) {
    background: url("https://plus.unsplash.com/premium_photo-1683133518677-6125a05cda5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWluZGZ1bG5lc3MlMjBSZXRyZWF0cyUzQSUyME1pbmRmdWwlMjBtZWRpdGF0aW9uJTIwcmV0cmVhdHMlMkMlMjBtaW5kZnVsbmVzcyUyMHdvcmtzaG9wcyUyQyUyMG9yJTIwaG9saXN0aWMlMjBoZWFsaW5nJTIwcmV0cmVhdHN8ZW58MHx8MHx8fDA%3D")
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

function Experiences({ name, title }) {
  return (
    <ProfileCard>
      <div className="profile-content">
        <h2 style={{color:"palevioletred", fontSize:"30px;"}}>{name}</h2>
        <span>{title}</span>
      </div>
    </ProfileCard>
  );
}

function ExperiencesContainer() {
  return (
    <div className="profile-container">
      <Experiences
        name="Adventure Experiences"
        title="Thrilling Expeditions"
      />
      <Experiences
        name="Culinary Experiences"
        title="Gourmet Journeys"
      />
      <Experiences
        name="Wellness Retreats"
        title="Serene Escapes"
      />
      <Experiences
        name="Cultural Experiences"
        title="Historical Tours"
      />
      <Experiences
        name="Outdoor Adventures"
        title="Nature Excursions"
      />
      <Experiences
        name="Luxury Travel Experiences"
        title="Opulent Getaways"
      />
      <Experiences
        name="Creative Workshops"
        title="Artistic Pursuits"
      />
      <Experiences
        name="Adrenaline Rush Experiences"
        title="Extreme Thrills"
      />
      <Experiences
        name="Music and Entertainment"
        title="VIP Entertainment"
      />
      <Experiences
        name="Mindfulness Retreats"
        title="Tranquil Retreats"
      />
    </div>

  );
}

export default ExperiencesContainer;
