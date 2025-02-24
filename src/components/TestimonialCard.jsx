import React from "react";

const TestimonialCard = ({ name, message }) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      <p>{message}</p>
    </div>
  );
};

export default TestimonialCard;
