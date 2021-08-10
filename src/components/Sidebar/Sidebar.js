import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/";
export default function Sidebar() {
  return (
    <ProductConsumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <SideWrapper show={sidebarOpen ? true : false}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const SideWrapper = styled.nav`
  position: fixed;
  top: 71px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0%)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    text-decoration: none;
    color: var(--mainBlack);
    padding: 0.5rem 1rem;
    background: transparent;
  }
  .sidebar-link:hover {
    color: var(--mainWhite);
    transition: var(--mainTransition);
    background: var(--primaryColor);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
