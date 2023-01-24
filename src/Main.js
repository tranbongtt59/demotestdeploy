import React, { Component } from "react";
import { Route,  NavLink, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Stuff from "./Stuff";
import ProductDetail from "./ProductDetail";
import Products from "./Product2";
 
class Main extends Component {
  render() {
    return (
            <div>
                <h1>Sinnie Fashion</h1>
                <ul className="header">
                    <li><NavLink to="/">Trang chủ</NavLink></li>
                    <li><NavLink to="/products">Sản phẩm</NavLink></li>
                    <li><NavLink to="/contact">Liên hệ</NavLink></li>
                    <li><NavLink to="/stuff">Tin tức</NavLink></li>
                </ul>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/stuff" element={<Stuff />}/>
                        <Route path="/products/:id" exact element={<ProductDetail />} />
                        <Route exact path="/products" element={<Products />}/>
                    </Routes>
                </div>
            </div>
    );
  }
}


 
export default Main;