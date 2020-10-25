import React from "react"

export const initialState={
    cart:[],
}

export const getCartTotal =(cart)=>cart?.reduce((amount,item)=>item.price+amount,0);
// const getCartTotal=(cart)=>{

//     cart.reduce((amount,item=>console.log(item.price))
// }

export const reducer=(state,action)=>{
    console.log(state)
    console.log(action)
    switch (action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...state.cart,action.item]
            }
            case "REMOVE_FROM_CART":
                console.log(action)
                let newCart=[...state.cart]
                const index=newCart.findIndex(item=>item.id===action.id)
                console.log(index)
                if (index>=0){
                    newCart.splice(index,1)
                    
                }
                else{
                    console.warn("Your product is no longer in the basket")
                }
                return{
                    ...state,
                    cart:newCart
                }
                
    }
}