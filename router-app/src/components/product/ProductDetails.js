import React from 'react';
import {useParams} from 'react-router-dom'
import data from '../../data.json';
import './product-single.css'


const ProductDetails = () => {
  
    const params = useParams();
    // console.log("Data is :", data)
    console.log("params id:", params.id)
    const productId = Number(params.id)
    const singleProduct = data.find(product =>  productId === product.id)
    // console.log("single product", singleProduct)
    return (
        <div className='single__product'>
          <h2 className='product__title'>{singleProduct.title}</h2>
          <img className='product__img' src={singleProduct.image} />
          <p className='product__des' >{singleProduct.description}</p>
          <p>Price:${singleProduct.price}</p>
          <p>Rating:{singleProduct.rating.rate}</p>
        </div>
    )
}

export default ProductDetails
