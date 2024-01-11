import React from 'react'
import "./product.css";

import Navbar from './Navbar';


const Product = (props) => {
  return (
    <div className='container'>
     
      <div className='product-image'>
       <img src={props.image} alt="" />
      </div>

      <div className='product-info'>
        <h3 className='price'>
        ₹ {props.price}
        </h3>
        <p className='desc'>
          {props.desc}
        </p>
        </div>
        <div  className='likeicon'>
<a href="#">        <i class="fa-regular fa-heart"></i>
</a>         
  </div>
        <p className='loc-date'>
        <span className='location'>{props.loc}</span>
        <span className='date'>{props.date}</span>
        </p>
        
      </div>
    
  )
}

export default Product
