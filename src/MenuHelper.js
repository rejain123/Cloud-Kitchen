import React from 'react'
import Menu from './Menu'
import "./MenuHelper.css"

function MenuHelper() {
    return (
        <div className="menuHelper">
        <a id="RestaurantStyled">

        <h1 className="menuHelper_style">Restaurant Styled Menu</h1>
        <div className="menuHelper__row">

        <Menu
            id="12345"
            image="https://www.ndtv.com/cooks/images/kadhai%20paneer.jpg"
            name="Kadhai Paneer"
            description="Cottage Cheese Stewed In Onion, Tomato, Coriander, Crushed Chili Sauce"
            weight="32oz"
            price={20}
        />
        <Menu
            id="38573"
            image="https://blog.williams-sonoma.com/wp-content/uploads/2016/08/sept-12-Indian-Style-Spiced-Greens-with-Paneer-652x652.jpg"
            // image="https://www.seriouseats.com/images/2016/03/20160330-vegan-saag-paneer-tofu-cauliflower-recipe-20-1500x1125.jpg"
            name="Saag Paneer"
            description="Watsonville Spinach Cooked with Cottage Cheese, Garlic, Cream

"
            weight="32oz"
            price={20}
        />
         <Menu
         id="36828"
            image="https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/malai-kofta-recipe.jpg"
            name="Malai Kofta"
            description="Vegetable potato paneer balls in onion creamy tomato sauce with cashews, almond and raisins"
            weight="32oz"
            price={20}
        />
      
        </div>
      

        <div className="menuHelper__row">

<Menu
    id="94273"
    image="https://i.ndtvimg.com/i/2016-11/dal-makhani_620x350_41478501912.jpg"
    name="Dal Makhani"
    description="Whole black lentil simmered on slow fire overnight and tempered with ginger, garlic, tomato, touch of butter and cream"
    weight="32oz"
    price={20}
/>
<Menu 
    id="29475"
    image="https://cdn.shopify.com/s/files/1/2590/5380/articles/Chickpea-Aloo-Gobi_1600x.jpg?v=1586819539"
    name="Aloo Gobi"
    description="Organic Red Skin Potatoes, Watsonville Cauliflower, Onion, Tomato, Ginger, Cilantro"
    price={20}

    />

 <Menu
    id="72639"
    image="https://st3.depositphotos.com/5653638/17791/i/450/depositphotos_177917484-stock-photo-assorted-indian-bread-basket-includes.jpg"
    name="Naans"
    description="Assortment of Indian breads"
    weight="32oz"
    price={20}
/>

</div>
  </a>

<a id="HomelyStyled">


        <h1 className="menuHelper_style">Homely Styled Menu</h1>
        <div className="menuHelper__row">
            <Menu 
                id="27392"
                image="https://www.onearabvegan.com/wp-content/uploads/2017/08/easy-vegan-dal-tadka-1.jpg"
                name="Yellow Dal Tadka"
                description="Yellow Lentils cooked with tomatoes and cream"
                price={20}

                />
                <Menu
                id="93847"
                image="https://img.taste.com.au/Io6RE4uz/taste/2016/11/mixed-vegetable-curry-89572-1.jpeg"
                name="Mixed Vegetables"
                description="Assortment of different vegetables cooked with a creamy tomato sauce"
                weight="32oz"
                price={20}
            />
              
                <Menu 
                id="10485"
                image="https://images.getbento.com/accounts/f9e236ee0606320da3fef952d3159bdc/mediausers/custom_fields_galleries/images/lpzM0eLRQXOfGfPTStzW_20150506_204753.jpg?w=1200&fit=crop&auto=compress,format&h=600"
                name="Kale Kofta"
                description="Organic Baby Kale Dumpling, Onion, Cumin, Tomato, Coconut

"
                    price={20}

                />
               
        </div>

        <div className="menuHelper__row">
        <Menu 
                id="20139"
                // image="https://honestcooking.com/wp-content/uploads/2016/12/Mushroom-MAtar-4-of-11-1.jpg"
                // image="https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2014/06/mushroom-matar-curry-recipe7.jpg"
                image="https://www.merirasoi.co.uk/wp-content/uploads/2019/01/Mushroom-Matar-Masala-Hero-Shot.jpg" 
                name="Matar Mushroom"
                description="Fresh mushroom and green peas in creamy tomato sauce."
                price={20}

                />
        <Menu 
                id="29472"
                image="https://www.awesomecuisine.com/wp-content/uploads/2008/02/palak_paneer_recipe.jpg"
                name="Palak Paneer"
                description="It is a delicious paneer in spinach cooked with fresh ginger garlic touch of butter and cream"
                price={20}

                />
               
            
                
                <Menu 
                id="93827"
                image="https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg"
                name="Aloo Parantha"
                description="Indian bread stuffed with a grated potato filling"
                price={20}

                />
               
        </div>


        </a>
       
            
        </div>
    )
}

export default MenuHelper
