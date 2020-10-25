import React from 'react'
import "./Menu.css"
import { useStateValue } from './StateProvider'
function Menu({id,image,name,description,weight,price}) {
    const[{cart},dispatch]=useStateValue();
    function addtoBasket(){
            dispatch({
                type:"ADD_TO_CART",
                item:{
                    id,
                    image,
                    name,
                    description,
                    price
                    

                }
            })
            console.log(cart)

    }
    return (
        <div className="menu">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Norican&display=swap"/>



        <img src={image} alt=""/>
        <div className="menu__text">
        <h2>{name}</h2>
        {/* <h4 className="menu__weight">{weight}</h4> */}
    
       

        <h2>${price}</h2>
        <h3 className="menu__description">{description}</h3>
        <button onClick={addtoBasket}>Add to Cart</button>
        </div>
  

     
       
        


     
            
        </div>
    )
}

export default Menu
