import React from "react";
import "./SubCard.css";
import CardDetails from '../Card/CardDetails'
import SubCard from "../Card/SubCard";
const Card = () => {
  return (
    <div className="card-container">
      {CardDetails.map((val) => (
        <SubCard
          key={val.id}
          Image={val.Image}
          Name={val.Name}
          Subject={val.Subject}
          Available={val.Available}
        />
      ))}
    </div>
  );
};

export default Card;
