import React from "react";
import Title from "../Title/Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="About Us"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my3">
            <Title title="About Us"></Title>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea at ipsum, labore delectus pariatur doloremque, tenetur eius est
              minus dolor quis laborum cumque quam! Obcaecati recusandae
              voluptates illo vero?
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              repellendus quis laborum veniam eos modi asperiores! Nobis,
              repudiandae.
            </p>
            <button
              style={{ marginTop: "2rem" }}
              className="main-link"
              type="button"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
