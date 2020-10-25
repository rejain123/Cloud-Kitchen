import React from 'react'
import "./HomeThirdPart.css"
import background from "./Images/Calendar.png"

function HomeThirdPart() {
    return (
        <div className="HomeThirdPart">
 <div className="HomeThirdPart_Background">
        <h1 className="HomeThirdPart__Style">Choose Your Style</h1>
        <div className="HomeThirdPart__Text">
        {<h2 className="HomeThirdPart__Text1">Restaurant</h2>}
        {<h2 className="HomeThirdPart__Text2">Home</h2>}
        </div>
       
     
        <div className="homeThirdPart__Images">
        
        <a href="./menu#RestaurantStyled">

        <img  className="homeThidPart__Pic" src="https://media.vogue.in/wp-content/uploads/2020/08/dal-makhani-recipe-1366x768.jpg" alt=""/>
        {/* <button>Restaurant Styled</button> */}
        </a>
    
        <a href="./menu#HomelyStyled">

        <img className="homeThidPart__Pic" src="https://www.whiskaffair.com/wp-content/uploads/2014/08/Lachha-Paratha-3.jpg" alt=""/>
        </a>
       

            
        </div>
        </div>

        <div className="HomeThirdPartBottom">
        <div className="homeThirdPart__Left">
        <h2>Order in Advance</h2>
        <h3>Prepare meals for multiple weeks in advance within 10 minutes</h3>
        <ul>
            <li>Log onto the app</li>
            <li>Pick from our diverse menu</li>
            <li>Schedule the date for your order to be dropped</li>
            <li>Book multiple delivery dates at once</li>
            <li>Save on delivery charges</li>
            <li>Each dish ordered will last at least 3 days</li>
            <li>Most Importantly : enjoy the food</li>

        </ul>
        </div>
        <div className="homeThirdPart__Right">
            <img className="homeThirdPart__background" src={background} alt="hi"/>
        </div>
        </div>

        
        </div>
       

    
    
    )
}

export default HomeThirdPart
