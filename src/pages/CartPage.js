import React from "react";
import Hero from "../components/Hero/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import CartSection from "../components/CartPage/CartWrapper";
export default function CartPage() {
  return (
    <>
      <Hero img={cartBcg}></Hero>
      <CartSection></CartSection>
    </>
  );
}
