import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import ShoppingCart from './ShoppingCart';
import Subtotal from './Subtotal';
import { getCartTotal } from './Reducer';


function Checkout() {

    const [{cart},dispatch]=useStateValue();
    
    function orderButton(){
    if (getCartTotal(cart)>0){
            return(
                <button>Place Order Here</button>

            )

        }
    }
    
   
    return (

        <div className="checkout">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Norican&display=swap"/>

        <div className="checkout__left">
        <h1 className="checkout__label">Checkout</h1>
        {
            cart?.length===0?(
                <h1 className="checkout__label">Your Cart is Empty</h1>
            ):
            cart.map(item=>(
                <ShoppingCart
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    id={item.id}
                />
                
                
            ))
        }
        <img src={cart.image} alt=""/>
        </div>

        <div className="checkout__right">
        <h1 className="checkout__totalLabel">Your Total</h1>

        <Subtotal />
        {cart.map(item=>(
            <Subtotal 
                price={item.price}
                name={item.name}
            />

        ))}
        <div className="checkout__box">
        <p className="checkout__totalItems"> Total Items: {cart.length}</p>
        <p className="checkout__totalPrice">Total Cost: {getCartTotal(cart)}</p>
        </div>
       

        {orderButton()}
        
        </div>
       

            
        </div>
    )
}

export default Checkout
