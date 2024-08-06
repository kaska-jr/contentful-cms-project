import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            sint repellat facilis quibusdam, vel dolore ratione architecto
            expedita doloribus animi! Odio, quod inventore quis quam voluptatum
            eius blanditiis ex impedit!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} className="img" alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
