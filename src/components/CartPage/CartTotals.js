import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BsFillTrashFill } from "react-icons/bs";
import { ProductConsumer } from "../../context/context";
export default function CartTotals() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { cart, cartTax, clearCart, cartSubTotal, cartTotal } = value;
            return (
              <div className="col text-title text-center">
                <div className="cart-values-container">
                  <h3 className="cart-values">
                    Subtotal : <span>${cartSubTotal}</span>
                  </h3>
                  <h3 className="cart-values">
                    Tax : <span>${cartTax}</span>
                  </h3>
                  <h3 className="cart-values">
                    Total : <span>${cartTotal}</span>
                  </h3>
                </div>
                {cart.length > 0 ? (
                  <button
                    onClick={clearCart}
                    className="btn btn-outline-danger text-capitalize mb-4"
                  >
                    <BsFillTrashFill /> Clear Cart
                  </button>
                ) : (
                  ""
                )}
                <Link to="/products">
                  <button className="btn btn-primary text-capitalize mb-4 mx-2">
                    <RiArrowGoBackLine /> Continue Shopping
                  </button>
                </Link>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
