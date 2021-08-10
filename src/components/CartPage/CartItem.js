import React from "react";
import { FaTrash, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function CartItem({
  cartItem,
  removeItem,
  increment,
  decrement,
  serialNo,
  setSingleProduct,
}) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <>
      <tr className=" mt-5 mt-lg-0 text-capitalize text-center align-content-center">
        <td data-th="#">{serialNo}</td>
        <td data-th="Product(s)">
          <Link
            to={`products/${id}`}
            onClick={() => {
              setSingleProduct(id);
            }}
          >
            <img src={image} width="75" alt={title} />
          </Link>
        </td>
        <td data-th="Name">{title}</td>
        <td data-th="Price">${price}</td>
        <td data-th="Quantity">
          <FaMinusCircle
            className="text-primary mx-2 is-pointer"
            onClick={() => {
              decrement(id);
            }}
          />
          {count}
          <FaPlusCircle
            className="text-primary mx-2 is-pointer"
            onClick={() => {
              increment(id);
            }}
          />
          <FaTrash
            className="text-danger mx-2 is-pointer"
            onClick={() => {
              removeItem(id);
            }}
          />
        </td>
        <td data-th="Total" className="fw-bold">
          ${total}
        </td>
      </tr>
    </>
  );
}
