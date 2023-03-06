import React from "react";
import "./Home.css";

// Home component that returns a div with container and text class
function Home() {
  return (
    <div className="section-a">
      <div className="container">
        {/* Image component */}
        <div className="image-kom">
          <img src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg" alt="img" />
        </div>
        <div className="text">
          {/* Header component */}
          <h1 className="mega-font">
            Hello
            <span> Pet Lovers</span>
          </h1>
          {/* Paragraph component */}
          <p style={{ fontSize: "30px" }}>
          Petfinder is a company dedicated to helping people find their perfect pet match. The company was founded with the mission of promoting the adoption of homeless pets and reducing pet overpopulation.
          Petfinder operates as an online database that connects potential adopters with animals available for adoption at animal shelters and rescue organizations across the Kenya🇰🇪.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
