import React from "react";
import Hero from "../components/Hero/Hero";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import singleProductImage from "../images/singleProductBcg.jpeg";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/context";
export default function SingleProductPage(props) {
  return (
    <>
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            // console.log("hello from loading");
            return <h1>Loading....</h1>;
          }
          const { company, description, id, price, title, image } =
            singleProduct;

          return (
            <>
              <Hero img={singleProductImage} title={title}></Hero>
              <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto-col-sm-8 col-md-6 my-3">
                      <img src={`${image}`} alt={title} className="img-fluid" />
                    </div>
                    <div className="col-10 mx-auto-col-sm-8 col-md-6 my-3">
                      <h5 className="text-title mb-4">{title}</h5>
                      <h5 className="text-capitalize text-muted mb-4">
                        Brand : {company}
                      </h5>
                      <h5 className="text-main text-capitalize mb-4">
                        Price : ${price}
                      </h5>
                      <p className="text-capitalize text-title mt-3">
                        Product Description{" "}
                      </p>
                      <p>{description}</p>
                      <button
                        className="btn btn-primary"
                        style={{ margin: ".75rem" }}
                        onClick={() => {
                          addToCart(id);
                        }}
                      >
                        <FaShoppingCart
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        />{" "}
                        Add To Cart
                      </button>
                      <Link
                        style={{ margin: ".75rem" }}
                        to="/products"
                        className="btn btn-danger"
                      >
                        <RiArrowGoBackLine
                          style={{ fontSize: "1.3rem", fontWeight: "bold" }}
                        />{" "}
                        Back to Products
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        }}
      </ProductConsumer>
    </>
  );
}
