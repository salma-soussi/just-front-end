import React, { Component } from 'react';
 import Header from "./header"
 import Footer from "./footer"
 import product1 from "./img/cart-page/product-1.jpg"
 import product2 from "./img/cart-page/product-2.jpg"
 import product3 from "./img/cart-page/product-3.jpg"
class ShoppingCard extends Component {
    render() { 
        return (
            <div>
              
            
     <Header/>
            
            
            <div class="breacrumb-section">
            <div class="container">
            <div class="row">
            <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
            <a href="home.html"><i class="fa fa-home"></i> Home</a>
            <a href="shop.html">Shop</a>
            <span>Shopping Cart</span>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            
            <section class="shopping-cart spad">
            <div class="container">
            <div class="row">
            <div class="col-lg-12">
            <div class="cart-table">
            <table>
            <thead>
            <tr>
            <th>Image</th>
            <th class="p-name">Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th><i class="ti-close"></i></th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td class="cart-pic first-row"><img src={product1} alt=""/></td>
            <td class="cart-title first-row">
            <h5>Pure Pineapple</h5>
            </td>
            <td class="p-price first-row">$60.00</td>
            <td class="qua-col first-row">
            <div class="quantity">
            <div class="pro-qty">
            <input type="text" value="1"/>
            </div>
            </div>
            </td>
            <td class="total-price first-row">$60.00</td>
            <td class="close-td first-row"><i class="ti-close"></i></td>
            </tr>
            <tr>
            <td class="cart-pic"><img src={product2} alt=""/></td>
            <td class="cart-title">
            <h5>American lobster</h5>
            </td>
            <td class="p-price">$60.00</td>
            <td class="qua-col">
            <div class="quantity">
            <div class="pro-qty">
            <input type="text" value="1"/>
            </div>
            </div>
            </td>
            <td class="total-price">$60.00</td>
            <td class="close-td"><i class="ti-close"></i></td>
            </tr>
            <tr>
            <td class="cart-pic"><img src={product3} alt=""/></td>
            <td class="cart-title">
            <h5>Guangzhou sweater</h5>
            </td>
            <td class="p-price">$60.00</td>
            <td class="qua-col">
            <div class="quantity">
            <div class="pro-qty">
            <input type="text" value="1"/>
            </div>
            </div>
            </td>
            <td class="total-price">$60.00</td>
            <td class="close-td"><i class="ti-close"></i></td>
            </tr>
            </tbody>
            </table>
            </div>
            <div class="row">
            <div class="col-lg-4">
            <div class="cart-buttons">
            <a href="#" class="primary-btn continue-shop">Continue shopping</a>
            <a href="#" class="primary-btn up-cart">Update cart</a>
            </div>
            <div class="discount-coupon">
            <h6>Discount Codes</h6>
            <form action="#" class="coupon-form">
            <input type="text" placeholder="Enter your codes"/>
            <button type="submit" class="site-btn coupon-btn">Apply</button>
            </form>
            </div>
            </div>
            <div class="col-lg-4 offset-lg-4">
            <div class="proceed-checkout">
            <ul>
            <li class="subtotal">Subtotal <span>$240.00</span></li>
            <li class="cart-total">Total <span>$240.00</span></li>
            </ul>
            <a href="#" class="proceed-btn">PROCEED TO CHECK OUT</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            
            
           
            
            <Footer/>
       
            </div>
        );
    }
}
 
export default ShoppingCard;