import React from "react";
import { FaBars, FaCartPlus, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";
import logo from "../../images/logo.svg";
export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart, sidebarOpen } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <div className="nav-icon">
                {!sidebarOpen ? (
                  <FaBars className="sidebar-icons" onClick={handleSidebar} />
                ) : (
                  <FaTimes className="sidebar-icons" onClick={handleSidebar} />
                )}
              </div>
              <Link to="/">
                <img src={logo} alt="Tech Store Logo" />
              </Link>
              <div className="nav-cart">
                <FaCartPlus
                  className="nav-icon"
                  onClick={handleCart}
                ></FaCartPlus>
                <div className="cart-items" style={{ fontWeight: 500 }}>
                  {cartItems}
                </div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainWhite);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 3;
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    border-radius: 50%;
    height: 1.2rem;
    width: 1.2rem;
    display: flex;
    padding: 0.1rem 0.2rem;
    justify-content: center;
    align-items: center;
    transition: var(--mainTransition);
  }
  .sidebar-icons {
    opacity: 1;
    transition: all 0.1s ease-in-out;
  }
  .sidebar-icons:active {
    opacity: 0;
    transform: rotate(0deg);
    transition: all 0.1s ease-in-out;
  }
`;
