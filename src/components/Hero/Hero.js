import React from "react";
import styled from "styled-components";
import mainBcg from "../../images/mainBcg.jpeg";

export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>

        {children}
      </div>
    </HeroWrapper>
  );
}
const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  min-height: ${props => (props.max ? "100vh" : "60vh")};
  font-size: 2rem;
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) no-repeat center/cover;
  color: var(--mainWhite);
  .title {
    font-weight: 400;
    font-size: 3.8rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: var(--mainSpacing);
    margin: 0 0 3rem 0;
  }
  @media (min-width: 576px) {
    background-attachment: fixed;
  }
`;
Hero.defaultProps = {
  img: mainBcg,
};
