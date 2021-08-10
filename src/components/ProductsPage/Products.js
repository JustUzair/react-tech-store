import React from "react";
import Product from "../Product/Product";
import { ProductConsumer } from "../../context/context";
import Title from "../Title/Title";
import ProductFilter from "./ProductFilter";
export default function ProductsPage() {
  return (
    <ProductConsumer>
      {value => {
        let { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Our Products" center></Title>
              <ProductFilter></ProductFilter>
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    Total Products : {filteredProducts.length}
                  </h6>
                </div>
              </div>
              <div className="row py-5">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => {
                    return (
                      <Product key={product.id} product={product}></Product>
                    );
                  })
                ) : (
                  <h1 className="text-title text-center text-secondary">
                    Sorry, No match found !!!
                  </h1>
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
