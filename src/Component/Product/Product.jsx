import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,seller,price,ratings}=props.product;
    
    return (
        <div className='product'>
              <img src={img} alt="" />
              <div className='product-info'>
              <h6 className='product-name'>{name}</h6>
              <p>price: ${price}</p>
              <p>Manufacturer: {seller}</p>
              <p>Rating: {ratings} Stars </p>
              </div>
              <button className='button-cart'>Add to cart</button>

        </div>
    );
};

export default Product;