import React from "react";

const Card = ({ title, description, circleNumber }) => {
  return (
    <div className="card">
      <div className="circle-container">
        <span className="circle">{circleNumber}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
