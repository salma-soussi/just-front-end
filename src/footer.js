import React, { Component } from 'react';
import log1 from "./img/fatales.png"
import log2 from "./img/exist1.png"
import log3 from "./img/flormar.png"
import log4 from "./img/bershka.png"
import log5 from "./img/zara.png"
import logof from "./img/footer-logo.png"
import payment from "./img/payment-method.png"
class Footer extends Component {
    render() { 
        return (

<div>
<div class="partner-logo">
<div class="container">
<div class="logo-carousel owl-carousel">
<div class="logo-item">
<div class="tablecell-inner">
<img src={log1} alt=""/>
</div>
</div>
<div class="logo-item">
<div class="tablecell-inner">
<img src={log2} alt=""/>
</div>
</div>
<div class="logo-item">
<div class="tablecell-inner">
<img src={log3} alt=""/>
</div>
</div>
<div class="logo-item">
<div class="tablecell-inner">
<img src={log4} alt=""/>
</div>
</div>
<div class="logo-item">
<div class="tablecell-inner">
<img src={log5} alt=""/>
</div>
</div>
</div>
</div>
</div>


<footer class="footer-section">
<div class="container">
<div class="row">
<div class="col-lg-3">
<div class="footer-left">
<div class="footer-logo">
<a href="#"><img src={logof} alt=""/></a>
</div>
<ul>
<li>Address: 60 Road 11378 New York</li>
<li>Phone: +216 22 749 274</li>
<li>Email: <a >justtn.pfe@gmail.com</a></li>
</ul>
<div class="footer-social">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>

<a href="#"><i class="fa fa-pinterest"></i></a>
</div>
</div>
</div>
<div class="col-lg-2 offset-lg-1">
<div class="footer-widget">
<h5>Information</h5>
<ul>
<li><a href="#">About Us</a></li>
<li><a href="#">Checkout</a></li>
<li><a href="#">Contact</a></li>
<li><a href="#">Serivius</a></li>
</ul>
</div>
 </div>
<div class="col-lg-2">
<div class="footer-widget">
<h5>My Account</h5>
<ul>
<li><a href="#">My Account</a></li>
<li><a href="#">Contact</a></li>
<li><a href="#">Shopping Cart</a></li>
<li><a href="#">Shop</a></li>
</ul>
</div>
</div>
<div class="col-lg-4">
<div class="newslatter-item">
<h5>Join Our Newsletter Now</h5>
<p>Get E-mail updates about our latest shop and special offers.</p>
<form action="#" class="subscribe-form">
<input type="text" placeholder="Enter Your Mail"/>
<button type="button">Subscribe</button>
</form>
</div>
</div>
</div>
</div>
<div class="copyright-reserved">
<div class="container">
<div class="row">
<div class="col-lg-12">

<div class="payment-pic">
<img src={payment} alt=""/>
</div>
</div>
</div>
</div>
</div>
</footer>



  </div>      );
    }
}
 
export default Footer;