import React from "react";
import "./style.css";

const CarCard = (props) => {
  const { year, make, model, price, description } = props;

  return (
    <div className="car-card">
      <h3>
        {make} {model} {year}
      </h3>
      <p>Preço: R$ {price}</p>
      <p>Descrição: {description}</p>
    </div>
  );
};

export default CarCard;
