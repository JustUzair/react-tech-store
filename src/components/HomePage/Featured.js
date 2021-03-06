import React from "react";
import Product from "../Product/Product";
import Title from "../Title/Title";
import { ProductConsumer } from "../../context";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        {/* title */}
        <Title title="featured products" center="true" />
        {/* products */}
        <div className="row">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;

              return featuredProducts.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}
