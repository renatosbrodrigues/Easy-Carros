import React from "react";
import sellerProfile from "../../img/joaquim-cars.jpg";
import "./style.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const SellerPage = () => {
  const sellerInfo = {
    name: "Joaquim Cars",
    phone: "(123) 456-7890",
    address: "rua t-63 edificio rio das ostras, Anapolis, Goias",
    profileImage: sellerProfile,
  };

  return (
    <div>
      <Header></Header>
      <h1>Informações do Vendedor</h1>
      <div className="seller-info">
        <div className="seller-image">
          <img src={sellerInfo.profileImage} alt="Foto do Vendedor" />
        </div>
        <div className="seller-details">
          <h2>{sellerInfo.name}</h2>
          <p>Telefone: {sellerInfo.phone}</p>
          <p>Endereço: {sellerInfo.address}</p>
        </div>
      </div>
      <Link className="HomePagebtn" to={"/"}>
        Voltar
      </Link>
    </div>
  );
};

export default SellerPage;
