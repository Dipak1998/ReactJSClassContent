import React,{useState, useEffect} from 'react'
// import data from '../../data.json'
import { Link } from 'react-router-dom'
import './product.css'
const Product = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    getAllProduct()
  }, [])

  const getAllProduct =()=>{
    fetch('https://fakestoreapi.com/products').then(res => res.json())
    .then(data => {
      console.log(data)
      setProduct(data)
    })
  }
  console.log(product)

  // console.log("data is :", data)
  return (
    <div className='product'>
      <h1>Product</h1>
      <div className='product__wrapper'>
        {
          product.map((product,key)=>{
            return(
              <Link to= {"/product/" + product.id} className='product__card' key={key}>
                <p className='title'>{product.title}</p>
                <img width={200} style={{verticalAlign: 'middle'}} src={product.image} />
                <p>Price: {product.price}</p>
                <p>{product.desc}</p>
              </Link> 
            )
          })
        }
      </div>
    </div>
  )
}

export default Product
