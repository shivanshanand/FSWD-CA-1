import React from "react";
import TestimonialCard from "./components/TestimonialCard";

const App = () => {
  return (
    <>
      <h1 className="reviews-heading">Customer Reviews</h1>
      <div className="outer-container">
        <TestimonialCard name="Bernard" message="Good service 👍!!" />
        <TestimonialCard
          name="Mukesh"
          message="Well maintained and cleaned surroundings 👌!!"
        />
        <TestimonialCard
          name="Jeff"
          message="Service staff was well behaved 😊!!"
        />
      </div>
    </>
  );
};

export default App;
