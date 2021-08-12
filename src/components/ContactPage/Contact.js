import React from "react";
import Title from "../Title/Title";
import styled from "styled-components";
export default function Contact() {
  return (
    <ContactWrapper>
      <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="Contact Us" center></Title>
            <form
              encType="multipart/form-data"
              method="post"
              className="mt-5"
              action={`https://formspree.io/f/${process.env.REACT_APP_FORMSPREE}`}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control custom-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="abc@xyz.com"
                  className="form-control custom-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control custom-input"
                  name="subject"
                  placeholder="Subject"
                  required
                ></input>
              </div>
              <div className="form">
                <textarea
                  name="query"
                  className="form-control custom-input"
                  rows="5"
                  placeholder="Your Query"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  className=" form-control btn btn-primary"
                  type="submit"
                  value="Send"
                />
              </div>
              <input type="hidden" name="_next" value="/cart" />
            </form>
          </div>
        </div>
      </section>
    </ContactWrapper>
  );
}
const ContactWrapper = styled.div`
  overflow-x: hidden;
  .custom-input:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .custom-input:focus:valid {
    border: 2px solid #28a745;
    box-shadow: 1px 1px 8px #1aa73b;
  }
  .custom-input:focus:invalid {
    border: 2px solid #dc3545;
    box-shadow: 1px 1px 8px #c52535;
  }
  .btn {
    border: inherit;
    box-shadow: inherit;
  }
`;
