import React from "react";
import Title from "../Title/Title";
import CartTotals from "./CartTotals";
import CartColumns from "./CartColumns";
import CartList from "./CartList";

import { ProductConsumer } from "../../context/context";
export default function Cart({ history }) {
  return (
    <ProductConsumer>
      {value => {
        const { cart } = value;

        return (
          <section
            className="py-5"
            style={{
              display: "flex",
              justifyContent: "safe center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0 min(2rem,4rem)",
            }}
          >
            {/* Title */}
            <div className="container">
              <Title title="Cart Items" center></Title>
            </div>
            {/* cart columns */}{" "}
            {cart.length > 0 ? (
              <>
                <div className="container-fluid text-center  d-lg-block my-2 table-responsive">
                  <table className="table resp mx-auto">
                    <thead className="thead-dark bg-dark heading">
                      <CartColumns></CartColumns>
                    </thead>
                    {/* Cart Item end */}
                    <tbody>
                      <CartList></CartList>
                    </tbody>
                    {/* Cart Item end */}
                  </table>
                </div>
              </>
            ) : (
              <h1
                className="text-center my-3 text-danger border border-danger px-5 rounded"
                style={{
                  letterSpacing: ".2rem",
                  alignSelf: "center",
                }}
              >
                Your Cart is Empty....!
              </h1>
            )}
            {/* cart totals */}
            <CartTotals history={history}></CartTotals>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
