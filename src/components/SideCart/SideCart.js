import React from "react";
import { ProductConsumer } from "../../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, setSingleProduct, cartTotal } =
          value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            {/* <p>Cart items</p> */}
            <ul>
              {cart.map(item => {
                return (
                  <li
                    style={{ borderBottom: "2px solid var(--primaryColor)" }}
                    className="cart-item mb-4"
                    key={item.id}
                  >
                    <Link
                      to={`/products/${item.id}`}
                      onClick={() => {
                        setSingleProduct(item.id);
                      }}
                    >
                      <img
                        width="70"
                        src={`${item.image}` || item.image}
                        alt={item.title}
                        style={{ cursor: "pointer", margin: "0 0 0 .6rem" }}
                      />
                    </Link>
                    <div style={{ marginLeft: ".3rem" }} className="mt-3">
                      <h6 className="text-uppercase">
                        {item.title}{" "}
                        <span
                          style={{
                            fontWeight: 350,
                            textTransform: "lowercase",
                          }}
                        >
                          {" "}
                          x {item.count}
                        </span>
                      </h6>
                      {/* <h6 className="text-title text-capitalize">
                          Quantity : ${item.count}
                        </h6> */}
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main text-center">
              Total Amount : ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link
                to="/cart"
                className="main-link"
                style={{ padding: "1rem", fontWeight: "600" }}
              >
                <FiShoppingCart
                  style={{ fontSize: "1.7rem", margin: " 0 .5rem 0 0" }}
                />
                View Cart
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const CartWrapper = styled.div`
  position: fixed;
  top: 71px;
  right: 0;
  background: var(--mainGrey);
  z-index: 1;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  border-left: 4px solid var(--primaryColor);
  transform: ${props => (props.show ? "translate(0%)" : "translate(100%)")};
  transition: var(--mainTransition);
  overflow-y: scroll;
  padding: 2rem 0;
  @media (min-width: 576px) {
    width: 20rem;
  }
  ul {
    padding: 0 !important;
  }
  ul .cart-item {
    list-style: none;
  }
`;
