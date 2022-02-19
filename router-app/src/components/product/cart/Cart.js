import React,{useState} from 'react'
import './cart.css'

const Cart = () => {

    const [cartList, setCartList] = useState([])

    // satic cartData
    const cartProduct = {
        id:1,
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price:45
    }
  return (
   <div className='cart__section'>
       <h1 className='cart__heading'>Cart</h1>
       <div className='cart__cards'>
            {
                cartList.length ==0 ? (
                    <div className='cart_card_item'>
                        <img src={cartProduct.image}/>
                        <p>{cartProduct.title}</p>
                        <p>{cartList.price}</p>
                        <p>1 <button>+</button> <button>-</button></p>
                        <button>x</button>
                    </div>
                ):
                (<p>No Product added to the cart </p>)
                
            }
       </div>
       

   </div>
  )
}

export default Cart