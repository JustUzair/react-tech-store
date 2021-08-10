import React from "react";
import { ProductConsumer } from "../../context/context";
import styled from "styled-components";
export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="conatiner py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; tech store {new Date().getFullYear()}. All
                    rights reserved
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialLinks.map(item => {
                    return (
                      <a
                        key={item.id}
                        href={item.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const FooterWrapper = styled.footer`
  text-align: center;
  background: var(--darkGrey);
  color: var(--mainWhite);
  /* Sticky Footer Gamble */
  /* position: absolute;
  width: 100%; */
  /* Sticky Footer Gamble */
  .icon {
    color: var(--mainWhite);
    font-size: 2rem;
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
