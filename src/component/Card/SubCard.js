import React from "react";
import { useNavigate } from "react-router-dom";
const SubCard = (props) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/Page");
  };

  return (
    <div className="card-main">
      <div className="card-detail">
        <img className="image" src={props.Image} alt="" />
        <h3>Name: {props.Name} </h3>
        <h3>Sub: {props.Subject}</h3>
        <h3>Available: {props.Available}</h3>
        <div className="mentor-buttons-container">
          {props.Available === "Online" && (
            <button className="mentor-button" onClick={handleBooking}>
              Schedule Class
            </button>
          )}
          {props.Available === "Offline" && (
            <button className="mentor-button-red-sign" onClick={handleBooking}>
              Book Session
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubCard;
