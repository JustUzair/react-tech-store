import React from "react";
import Hero from "../components/Hero/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
// import { ProductConsumer } from "../context/";
export default function HomePage() {
  return (
    <>
      <Hero title={"Awesome Gadgets"} max="true">
        <Link to="/products" className="main-link">
          Our Products
        </Link>
      </Hero>
      <Services></Services>
      <Featured></Featured>
    </>
  );
}
