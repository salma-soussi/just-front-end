import React, { Component } from 'react';
import logo1 from "./img/logo-carousel/logo-1.png" 
import logo2 from "./img/logo-carousel/logo-2.png" 
import logo3 from "./img/logo-carousel/logo-3.png" 
import logo4 from "./img/logo-carousel/logo-4.png" 
import logo5 from "./img/logo-carousel/logo-5.png" 
class Footer extends Component {
    render() { 
        return (

<div>
<div class="partner-logo">
<div class="container">
<div class="logo-carousel owl-carousel">
<div class="logo-item">
<div class="tablecell-inner">
<img src={logo1} alt=""/>
</div>
</div>
<div class="logo-item">
<div class="tablecell-inner">
<img src={logo2} alt=""/>
</div>
</div>
<div class="logo-item">
<div class="tablecell-inner">
<img src={logo3} alt=""/>
</div>
</div>
<div class="logo-item">
<div class="tablecell-inner">
<img src={logo4} alt=""/>
</div>
</div>
<div class="logo-item">
<div class="tablecell-inner">
<img src={logo5} alt=""/>
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
<a href="#"><img src="img/footer-logo.png" alt=""/></a>
</div>
<ul>
<li>Address: 60-49 Road 11378 New York</li>
<li>Phone: +65 11.188.888</li>
<li>Email: <a href="https://colorlib.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="81e9e4ededeeafe2eeedeef3ede8e3c1e6ece0e8edafe2eeec">[email&#160;protected]</a></li>
</ul>
<div class="footer-social">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
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
<div class="copyright-text">

Copyright &copy;<script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="57c3ebed56328bffa90cf635-text/javascript">document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>

</div>
<div class="payment-pic">
<img src="img/payment-method.png" alt=""/>
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