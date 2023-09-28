import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const CarCard = (props) => {
  const { year, make, model, price, description, img, sellerName } = props;

  return (
    <div className="car-card">
      <img src={img} alt="img.carro"></img>
      <h3>
        {make} {model} {year}
      </h3>
      <div className="car-card-desc">
        <p className="car-price">Preço: R$ {price}</p>
        <p className="car-desc">{description}</p>
      </div>
      <Link to={"/seller"}>{sellerName}</Link>
    </div>
  );
};

export default CarCard;
