import React from "react";
import sm1 from "../img/sf1.jpg";
import sm2 from "../img/sf2.jpg";
import sm3 from "../img/sf3.jpg";


import sw1 from "../img/sw1.png";
import sw2 from "../img/sw2.png";
import sw3 from "../img/ss1.jpg";
export default function Hero() {
  return (
    <div className="w-100">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sm1} className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={sm2} className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={sm3} className="d-block w-100" alt="Third slide" />
          </div>



          <div className="carousel-item">
            <img src={sw1} className="d-block w-100" alt="Third slide" />
          </div>

          <div className="carousel-item">
            <img src={sw2} className="d-block w-100" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img src={sw3} className="d-block w-100" alt="Third slide" />
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
