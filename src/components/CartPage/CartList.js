import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context/context";
export default function CartList() {
  return (
    <ProductConsumer>
      {value => {
        const { setSingleProduct, cart, increment, decrement, removeItem } =
          value;
        return cart.map((item, index) => {
          return (
            <CartItem
              key={item.id}
              increment={increment}
              decrement={decrement}
              removeItem={removeItem}
              cartItem={item}
              serialNo={index + 1}
              setSingleProduct={setSingleProduct}
            ></CartItem>
          );
        });
      }}
    </ProductConsumer>
  );
}
