import React, { createContext,useState } from 'react';
import blackNike from '../Assests/BlackNike.jpg';
import blueSimple from '../Assests/BlueSimple.jpg';
import cutShoes from '../Assests/CutShoes.jpg';
import grayShoes  from '../Assests/GrayShoes.jpg';
import leatherShoe from '../Assests/LeatherShoe.jpg';
import loveJoggers from '../Assests/LoveJoggers.jpg';
import menSportsShoes from '../Assests/MenSportsShoes.jpg';
import multicolorNike from '../Assests/MulticolorNike.jpg';
import rainbowSports from '../Assests/RainbowSports.jpg';
import whiteNike from '../Assests/MenWhiteNikeShoes.jpg'

export const ProductsContext = createContext();

 const ProductsContextProvider = (props) => {
    const [products] = useState([
       {id: 1, name: 'Black Nike', price: 6000, image:blackNike, status:'hot' },
       {id: 2, name: 'Blue Simple Shoe', price: 2500, image:blueSimple, status:'new'},
       {id: 3, name: 'Cut Shoes', price: 5000, image:cutShoes, status:'new'},
       {id: 4, name: 'Gray style Shoe', price: 4500, image:grayShoes, status:'hot'},
       {id: 5, name: 'Leather Shoe', price: 6500, image:leatherShoe, status:'new'},
       {id: 6, name: 'Love Joggers', price: 4000, image:loveJoggers, status:'new'},
       {id: 7, name: 'Sports Men', price: 3500, image:menSportsShoes, status:'new'},
       {id: 8, name: 'Nike Multicolor Shoe', price: 3000, image:multicolorNike, status:'hot'},
       {id: 9, name: 'Rainbow Sports Shoe', price: 3000, image:rainbowSports, status:'hot'},
       {id: 10, name: 'Men White Nike', price: 6500, image:whiteNike, status:'hot'},
        
    ])
    return (
       <ProductsContext.Provider value={{products: [...products]}}>
         {props.children}
       </ProductsContext.Provider>
    )
}
  

export default ProductsContextProvider;
