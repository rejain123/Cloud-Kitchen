import React from 'react'
import "./ShoppingCart.css"
import { useStateValue } from './StateProvider'

function ShoppingCart({name,image,price,id}) {
    const[{item},dispatch]=useStateValue();
    function removeFromcart(){
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id
        })
    }
    return (

     
        <div className="shopping__cart">
                <h2>{name}</h2>
                <img className="shoppingCart__image" src={image} alt=""/>
                <h3>${price}</h3>
                <button onClick={removeFromcart}>Remove from Cart</button>
                </div>
            
        
    )
}

export default ShoppingCart
