import React, { Component } from 'react';

class Item extends Component {
   
    render() { 
        const { image, price ,name} = this.props.item
        return (
      
            <div class="col-lg-4 col-sm-6">
            <div class="product-item">
                <div class="pi-pic">
                <img src={`http://localhost:3020/furniture/getImage/${image}`}/>
                    <div class="sale pp-sale">Sale</div>
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
                        <h5>{name}</h5>
                    </a>
                    <div class="product-price">
                       {price} TND
          
                    </div>
                </div>
            </div>
        </div>
       
            
        );
    }
}
 
export default Item;