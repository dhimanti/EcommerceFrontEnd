import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Breadcrumb({ paths }) {
  return (
    <nav aria-label="breadcrumb" style={{textDecoration:"none"}}>
      <ol className="breadcrumb" style={{borderBottomLeftRadius:"25px", borderBottomRightRadius:"25px", margin: "0px"}}>
        {paths.map((path, index) => (
          <li key={index} className="breadcrumb-item">
            {path.url ? <Link to={path.url}>{path.label}</Link> : path.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
