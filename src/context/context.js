import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
// import { items } from "./productData";
import { client } from "./Contentful";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    // Sidebar
    sidebarOpen: false,
    // Product pages links
    links: linkData,
    // Social links
    socialLinks: socialData,
    // Cart
    cartOpen: false,
    cartItems: 0,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    // Products
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    // Product Filtering
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: false,
  };
  // Get Data
  componentDidMount() {
    client
      .getEntries({
        content_type: "techStoreProducts",
      })
      .then(res => this.setProducts(res.items))
      .catch(console.error);
  }
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    //featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    // get max price
    let max = Math.max(...storeProducts.map(item => item.price));

    this.setState(
      {
        storeProducts,
        featuredProducts,
        filteredProducts: storeProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: max,
        max,
      },
      () => {
        this.addTotals();
      }
    );
  };
  //get cart  from local storage
  getStorageCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) return cart;
    else return [];
  };
  //get product from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };
  // get totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.map(function (item) {
      subTotal += item.total;
      cartItems += item.count;
      return "";
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.18;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total,
    };
  };
  //add totals
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    });
  };
  //sync storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };
  //Add to cart
  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      var cartItem = {
        ...tempItem,
        count: 1,
        total,
      };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    // console.log(tempCart);
    this.setState(
      () => {
        return {
          cart: tempCart,
        };
      },
      () => {
        this.synchronizeData();
        this.openCart();
      }
    );
  };
  synchronizeData() {
    this.addTotals();
    this.syncStorage();
    this.closeCart();
  }
  //set single product
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false,
    });
  };
  //   Handle sidebar
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  };
  //   Handle Cart
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen,
    });
  };
  //   Close Cart
  closeCart = () => {
    this.setState({
      cartOpen: false,
    });
  };
  //   Open Cart
  openCart = () => {
    this.setState({
      cartOpen: true,
    });
  };
  // Cart page functionality
  findCartItem = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    return cartItem;
  };
  // Increment
  updateCartState = tempCart => {
    this.setState(
      {
        cart: [...tempCart],
      },
      () => {
        this.synchronizeData();
      }
    );
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    let cartItem = this.findCartItem(id);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.updateCartState(tempCart);
  };
  // Decrement
  decrement = id => {
    let tempCart = [...this.state.cart];
    let cartItem = this.findCartItem(id);
    if (cartItem.count === 1) {
      this.removeItem(id);
      return;
    }
    cartItem.count--;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.updateCartState(tempCart);
  };
  removeItem = id => {
    let tempCart = this.state.cart.filter(item => item.id !== id);
    this.updateCartState(tempCart);
  };
  clearCart = () => {
    localStorage.clear();
    window.location.reload();
  };
  // product filter
  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    // console.log(name, value);
    this.setState(
      {
        [name]: value,
      },
      this.sortData
    );
  };
  sortData = () => {
    let { storeProducts, price, company, shipping, search } = this.state;
    let tempProducts = [...storeProducts];

    price = +price;
    // Filter by company
    if (company !== "all") {
      tempProducts = tempProducts.filter(item => item.company === company);
    }
    // Filter by search query
    if (search !== "") {
      tempProducts = tempProducts.filter(item => item.title.match(search));
    }
    if (shipping) {
      tempProducts = tempProducts.filter(item => item.freeShipping === true);
    }
    tempProducts = tempProducts.filter(item => item.price <= price);
    // update state
    this.setState({
      filteredProducts: tempProducts,
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          addTotals: this.addTotals,
          clearCart: this.clearCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
