import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "Free Shipping",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, repellat!",
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 Days Return Policy",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, repellat!",
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "Secured Payments",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, repellat!",
      },
    ],
  };

  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map(service => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3 "
                  key={service.id}
                >
                  <div className="service-icon">{service.icon}</div>
                  <div
                    className="mt-3 text-capitalize"
                    style={{
                      fontWeight: "700",
                      color: "var(--mainGrey)",
                      fontSize: "1.7rem",
                    }}
                  >
                    {service.title}
                  </div>
                  <div className="mt-3 info-text">{service.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: var(--servicesGrey);

  .service-icon {
    font-size: 2.5rem;
    color: var(--servicesIcons);
    font-weight: 900;
  }
  .info-text {
    /* color: var(--darkGrey); */
    color: var(--mainWhite);
  }
`;
