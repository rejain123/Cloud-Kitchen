import React from 'react'
import "./Subtotal.css"
import { getCartTotal } from './Reducer'
import { useStateValue } from './StateProvider'

function Subtotal({price,name}) {
    const [{cart}]=useStateValue();
    console.log(cart)
    if (price && name){
        return (
            <div className="subtotal">
    <div className="subtotal__box">
    
            <h3 className="subtotal__name"><u>{name}</u></h3>
    
            <h3 className="subtotal__price">${price}</h3>
    </div>
            
        
            
    
                
            </div>
        )
    }
    else{
        return(
            <div className="subtotal">
    
            <h3><u>{name}</u></h3>
    
            <h3 className="subtotal__price">{price}</h3>
    </div>
            

        )
    }
    
}

export default Subtotal
