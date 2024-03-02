import React, { useState } from "react";
import "./SubCard.css";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <button className="mentor-button" type="submit">Submit</button>
        </form>
      ) : (
        <div className="confirmation-message">
          <h2>Thank you for your submission!</h2>
          <p>We'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Form;
