import React, { Component } from 'react';
import './detailmode.css';



import women from "../../img/banner2.jpg"

import womn from "../../img/products/women-1.jpg"
import womn2 from "../../img/products/women-2.jpg"
import womn3 from "../../img/products/women-3.jpg"
import womn4 from "../../img/products/women-1.jpg"
import Header from "../../header"
import Footer from "../../footer"

class Detailmode extends Component {
    render() {
        return (
            <div>
                <Header />

                <div class="container">
                    <div class="card">
                        <div class="container-fliud">
                            <div class="wrapper row">
                                <div class="preview col-md-6">

                                    <div class="preview-pic tab-content">
                                        <div class="tab-pane active" id="pic-1"><img src={women} /></div>
                                        <div class="tab-pane" id="pic-2"><img src={womn} /></div>
                                        <div class="tab-pane" id="pic-3"><img src={womn2} /></div>
                                        <div class="tab-pane" id="pic-4"><img src={womn3} /></div>
                                        <div class="tab-pane" id="pic-5"><img src={womn4} /></div>
                                    </div>                                    
                                        <ul class="preview-thumbnail nav nav-tabs">
                                            <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={women} /></a></li>
                                            <li><a data-target="#pic-2" data-toggle="tab"><img src={womn} /></a></li>
                                            <li><a data-target="#pic-3" data-toggle="tab"><img src={womn2} /></a></li>
                                            <li><a data-target="#pic-4" data-toggle="tab"><img src={womn3} /></a></li>
                                            <li><a data-target="#pic-5" data-toggle="tab"><img src={womn4} /></a></li>
                                        </ul>                                   
                                </div>
                                <div class="details col-md-6">
                                    <h2 class="product-title">t-shirt</h2>
                                    <p class="vote"><strong>ref :</strong>32596 </p>
                                    <h4 class="price">current price: <span>180dt</span></h4>
                                    
                                    <h5 class="price">Description: </h5> 
                                    <p class="product-description">Optez pour ce sweat à capuche qui vous offrira des alternatives intéressantes de style et qui vous réchauffera le cœur quand le froid pointera le bout de son nez. Cet article vestimentaire peut aussi faire preuve de son efficacité en été pendant les nuits passées dehors.</p>
                                    
                                    
                                    <h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
                                        <span class="size" data-toggle="tooltip" title="medium">m</span>
                                        <span class="size" data-toggle="tooltip" title="large">l</span>
                                        <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                                    </h5>
                                    <h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                        <span class="color green"></span>
                                        <span class="color blue"></span>
                                    </h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <Footer />
            </div>
        );
    }
}

export default Detailmode;