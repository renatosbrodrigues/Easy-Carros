import React, { Component } from "react";
import Header from "../Header/Header";
import CarCard from "../CarCard/CarCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import camryImg from "../../img/camry.jpg";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        {
          id: 1,
          make: "Toyota",
          model: "Camry",
          year: 2021,
          price: 25000,
          description: "bom carro",
          img: camryImg,
          seller: "Joaquim Cars",
        },
        {
          id: 2,
          make: "Honda",
          model: "Civic",
          year: 2020,
          price: 22000,
          description: "japonês clássico",
          img: "https://cdn.motor1.com/images/mgl/RzE0m/s1/2020-honda-civic-hatchback-facelift.jpg",
          seller: "Joaquim Cars",
        },
        {
          id: 3,
          make: "Ford",
          model: "ka",
          year: 2019,
          price: 53000,
          description: "melhor carro do mundo",
          img: "https://cdn.motor1.com/images/mgl/GOoOV/s3/ford-ka-2019-antes-e-depois.jpg",
          seller: "Joaquim Cars",
        },
        {
          id: 4,
          make: "Ford",
          model: "ka",
          year: 2019,
          price: 53000,
          description: "melhor carro do mundo",
          img: "https://cdn.motor1.com/images/mgl/GOoOV/s3/ford-ka-2019-antes-e-depois.jpg",
          seller: "Joaquim Cars",
        },
        {
          id: 5,
          make: "Ford",
          model: "ka",
          year: 2019,
          price: 53000,
          description: "melhor carro do mundo",
          img: "https://cdn.motor1.com/images/mgl/GOoOV/s3/ford-ka-2019-antes-e-depois.jpg",
          seller: "Joaquim Cars",
        },
        {
          id: 6,
          make: "Ford",
          model: "ka",
          year: 2019,
          price: 53000,
          description: "melhor carro do mundo",
          img: "https://cdn.motor1.com/images/mgl/GOoOV/s3/ford-ka-2019-antes-e-depois.jpg",
          seller: "Joaquim Cars",
        },
      ],
      searchMake: "",
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchMake: event.target.value });
  };

  render() {
    const { cars, searchMake } = this.state;
    const filteredCars = cars.filter(
      (car) =>
        car.make.toLowerCase().includes(searchMake.toLowerCase()) ||
        car.model.toLowerCase().includes(searchMake.toLowerCase()) ||
        car.description.toLowerCase().includes(searchMake.toLowerCase())
    );

    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      speed: 1000,
      variableWidth: true,
      centerMode: true,
      centerPadding: "10px",
    };

    return (
      <div>
        <Header></Header>
        <h1>Easy Carros - Encontre seu carro dos sonhos</h1>
        <div>
          <input
            type="text"
            placeholder="Pesquisar por marca"
            value={searchMake}
            onChange={this.handleSearchChange}
          />
        </div>
        <div>
          <h2>Carros Disponíveis:</h2>
          {filteredCars.length === 0 ? (
            <p>Nenhum Carro encontrado</p>
          ) : (
            <Slider {...settings}>
              {filteredCars.map((car) => (
                <div key={car.id}>
                  <CarCard
                    year={car.year}
                    make={car.make}
                    model={car.model}
                    price={car.price}
                    description={car.description}
                    img={car.img}
                    sellerName={car.seller}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
