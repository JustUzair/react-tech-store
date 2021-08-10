import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
// Pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Default from "./pages/Default";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";

//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideCart from "./components/SideCart/SideCart";
import Sidebar from "./components/Sidebar/Sidebar";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Sidebar></Sidebar>
        <SideCart></SideCart>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer></Footer>
      </>
    );
  }
}
