import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import { HashLink  } from 'react-router-hash-link';
// import MenuHelper from "./MenuHelper"


function Home() {
    return (

        <div className="home">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Norican&display=swap"/>
      

            <div  className="home__left">
               <img className="home__left__pic" src="https://cyfsa.blob.core.windows.net/live/Ingredients/Red-birdseye-chillies-nutritional-information-calories.jpg" alt=""/>
               <p className="home__text">Come Home to Food</p>
              
               <Link to="/menu">
               <button>See Menu</button>
               </Link>
        
              
            </div>
            <div className="home__right">
                <img  className="home__right__pic" src="https://myfoodstory.com/wp-content/uploads/2016/07/creamy-matar-paneer-curry.1024x1024-3.jpg" alt=""/>
              
            </div>
           


        </div>
    )
}

export default Home
