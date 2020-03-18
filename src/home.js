
import React, { Component } from 'react';
import mens from "./img/banner-1.jpg"
import women from "./img/banner-2.jpg"
import kids from "./img/banner-3.jpg"
import womn from "./img/products/women-1.jpg"
import womn2 from "./img/products/women-2.jpg"
import womn3 from "./img/products/women-3.jpg"
import womn4 from "./img/products/women-4.jpg"
import men1 from "./img/products/man-1.jpg"
import men2 from "./img/products/man-2.jpg"
import men3 from "./img/products/man-3.jpg"
import men4 from "./img/products/man-4.jpg"
import blog from "./img/latest-1.jpg"
import blog2 from "./img/latest-2.jpg"
import blog3 from "./img/latest-3.jpg"
import log1 from "./img/logo-carousel/logo-1.png"
import log2 from "./img/logo-carousel/logo-2.png"
import log3 from "./img/logo-carousel/logo-3.png"
import log4 from "./img/logo-carousel/logo-4.png"
import log5 from "./img/logo-carousel/logo-5.png"
import logof from "./img/footer-logo.png"
import payment from "./img/payment-method.png"
import Header from "./header"
import Footer from "./footer"
class Home extends Component {
    render() {
        return (
            <div>

<Header/>
                <section class="hero-section">
                    <div class="hero-items owl-carousel">
                        <div class="single-hero-items  e"  >
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <span>Bag,kids</span>
                                        <h1>Black friday</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore</p>
                                        <a href="#" class="primary-btn">Shop Now</a>
                                    </div>
                                </div>
                                <div class="off-card">
                                    <h2>Sale <span>50%</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="single-hero-items e2" >
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <span>Bag,kids</span>
                                        <h1>Black friday</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore</p>
                                        <a href="#" class="primary-btn">Shop Now</a>
                                    </div>
                                </div>
                                <div class="off-card">
                                    <h2>Sale <span>50%</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div class="banner-section spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={mens} />
                                    <div class="inner-text">
                                        <h4>Informatique</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={women} />
                                    <div class="inner-text">
                                        <h4>Fashion</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={kids} />
                                    <div class="inner-text">
                                        <h4>Electronique</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={women} />
                                    <div class="inner-text">
                                        <h4>Beauté</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={kids} />
                                    <div class="inner-text">
                                        <h4>Sport</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={mens} />
                                    <div class="inner-text">
                                        <h4>Meuble</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <section class="women-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="product-large e3" >
                                    <h2>Informatique</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                            <div class="col-lg-8 offset-lg-1">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">New product</li>

                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn} alt="" />
                                            <div class="sale">Sale</div>
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $14.00
<span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Guangzhou sweater</h5>
                                            </a>
                                            <div class="product-price">
                                                $13.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn4} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="man-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">New product</li>

                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men1} alt="" />
                                            <div class="sale">Sale</div>
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $14.00
<span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Guangzhou sweater</h5>
                                            </a>
                                            <div class="product-price">
                                                $13.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men4} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="product-large  m-large f"
                                >
                                    <h2>Fashion</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="women-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="product-large e3" >
                                    <h2>Electronique</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                            <div class="col-lg-8 offset-lg-1">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">New product</li>

                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn} alt="" />
                                            <div class="sale">Sale</div>
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $14.00
<span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Guangzhou sweater</h5>
                                            </a>
                                            <div class="product-price">
                                                $13.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn4} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="man-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">New product</li>

                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men1} alt="" />
                                            <div class="sale">Sale</div>
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $14.00
<span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Guangzhou sweater</h5>
                                            </a>
                                            <div class="product-price">
                                                $13.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men4} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="product-large  m-large f"
                                >
                                    <h2>Beauté</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="women-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="product-large e3" >
                                    <h2>Sport</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                            <div class="col-lg-8 offset-lg-1">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">New product</li>

                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn} alt="" />
                                            <div class="sale">Sale</div>
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $14.00
<span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Guangzhou sweater</h5>
                                            </a>
                                            <div class="product-price">
                                                $13.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn4} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="man-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">New product</li>

                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men1} alt="" />
                                            <div class="sale">Sale</div>
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $14.00
<span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Shoes</div>
                                            <a href="#">
                                                <h5>Guangzhou sweater</h5>
                                            </a>
                                            <div class="product-price">
                                                $13.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men4} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div class="product-price">
                                                $34.00
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="product-large  m-large f"
                                >
                                    <h2>Meuble</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <div class="instagram-photo">
                    <div class="insta-item e5"
                    >
                        <div class="inside-text">
                            <i class="ti-instagram"></i>
                            <h5><a href="#">colorlib_Collection</a></h5>
                        </div>
                    </div>
                    <div class="insta-item e6" >
                        <div class="inside-text">
                            <i class="ti-instagram"></i>
                            <h5><a href="#">colorlib_Collection</a></h5>
                        </div>
                    </div>
                    <div class="insta-item e7" >
                        <div class="inside-text">
                            <i class="ti-instagram"></i>
                            <h5><a href="#">colorlib_Collection</a></h5>
                        </div>
                    </div>
                    <div class="insta-item e8">
                        <div class="inside-text">
                            <i class="ti-instagram"></i>
                            <h5><a href="#">colorlib_Collection</a></h5>
                        </div>
                    </div>
                    <div class="insta-item e9" >
                        <div class="inside-text">
                            <i class="ti-instagram"></i>
                            <h5><a href="#">colorlib_Collection</a></h5>
                        </div>
                    </div>
                </div>


                <div class="partner-logo">
                    <div class="container">
                        <div class="logo-carousel owl-carousel">
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log1} alt="" />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log2} alt="" />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log3} alt="" />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log4} alt="" />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<Footer/>

            </div>
        );
    }
}

export default Home;
