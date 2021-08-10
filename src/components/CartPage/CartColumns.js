import React from "react";
export default function CartColumns() {
  return (
    <>
      <tr className="text-light">
        <th scope="col">#</th>
        <th scope="col">Product(s)</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total</th>
      </tr>
    </>
  );
}
