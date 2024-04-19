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
    background: url("https://images.unsplash.com/photo-1512540452972-baac55d40ef1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(2) {
    background: url("https://images.unsplash.com/photo-1597011652683-a9cec37b3bc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(3) {
    background: url("https://plus.unsplash.com/premium_photo-1681298434224-4c559463db47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TnVtaXNtYXRpY3MlM0ElMjBDb2xsZWN0aWJsZSUyMGNvaW5zJTJDJTIwY3VycmVuY3klMjBub3RlcyUyQyUyMGFuZCUyMHByZWNpb3VzJTIwbWV0YWxzJTIwd2l0aCUyMGhpc3RvcmljYWwlMjBvciUyMGN1bHR1cmFsJTIwc2lnbmlmaWNhbmNlLnxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(4) {
    background: url("https://images.unsplash.com/photo-1570414036784-f96df71770cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0YW1wc3xlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(5) {
    background: url("https://images.unsplash.com/photo-1587567920655-29a7ab222add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzJTIwY29sbGVjdGlibGVzfGVufDB8fDB8fHww")
      no-repeat 50% / cover;
  }
  &:nth-of-type(6) {
    background: url("https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFJhcmUlMjBjb21pYyUyMGJvb2tzJTJDJTIwZ3JhcGhpYyUyMG5vdmVscyUyQ3xlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(7) {
    background: url("https://images.unsplash.com/photo-1501829385782-9841539fa6bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(8) {
    background: url("https://plus.unsplash.com/premium_photo-1687962381666-e73410bae8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvcHMlMkMlMjBjb3N0dW1lcyUyQyUyMGFuZCUyMG1lbW9yYWJpbGlhJTIwZnJvbSUyMGljb25pYyUyMG1vdmllcyUyMGFuZCUyMHRlbGV2aXNpb24lMjBzaG93cy58ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(9) {
    background: url("https://plus.unsplash.com/premium_photo-1696960337404-d9cd0245a649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TXVzaWMlMjBNZW1vcmFiaWxpYSUzQSUyMEF1dG9ncmFwaGVkJTIwYWxidW1zJTJDJTIwY29uY2VydCUyMHBvc3RlcnMlMkMlMjBhbmQlMjBtZW1vcmFiaWxpYSUyMGZyb20lMjBmYW1vdXMlMjBtdXNpY2lhbnMlMjBhbmQlMjBiYW5kcy58ZW58MHx8MHx8fDA%3D")
      no-repeat 50% / cover;
  }
  &:nth-of-type(10) {
    background: url("https://images.unsplash.com/photo-1630817113215-b4d8af82032b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyaWx5biUyMG1vbnJvZXxlbnwwfHwwfHx8MA%3D%3D")
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

function Collectibles({ name, title }) {
  return (
    <ProfileCard>
      <div className="profile-content">
        <h2 style={{color:"palevioletred", fontSize:"30px;"}}>{name}</h2>
        <span>{title}</span>
      </div>
    </ProfileCard>
  );
}

function CollectiblesContainer() {
  return (
    <div className="profile-container">
      <Collectibles
        name="Fine Art"
        title="Masterpiece Treasures"
      />
      <Collectibles
        name="Antiques"
        title="Vintage Treasures"
      />
      <Collectibles
        name="Numismatics"
        title="Rare Currency"
      />
      <Collectibles
        name="Philately"
        title="Stamp Collecting"
      />
      <Collectibles
        name="Sports Memorabilia"
        title="Athletic Relics"
      />
      <Collectibles
        name="Comic Books and Trading Cards"
        title="Collectible Comics"
      />
      <Collectibles
        name="Toys and Action Figures"
        title="Childhood Nostalgia"
      />
      <Collectibles
        name="Movie and TV Memorabilia"
        title="Hollywood Memorabilia"
      />
      <Collectibles
        name="Music Memorabilia"
        title="Musical Artifacts"
      />
      <Collectibles
        name="Limited Edition Collectibles"
        title="Exclusive Artifacts"
      />
    </div>
  );
}

export default CollectiblesContainer;
