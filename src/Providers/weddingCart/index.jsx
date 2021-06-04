import {createContext,useState } from "react";

export const WeddingCartContext = createContext();

export const  WeddingCartProvider = ({children}) => {
    const [ weddingCart, setWeddingCart] = useState([]);

    const addToWeddingCart = (product) => {
        setWeddingCart([...weddingCart, product])
    }

    const removeFromWeddingCart = (product) => {
        const newWeddingCart = weddingCart.filter(
            productOnWeddingCart => productOnWeddingCart.name !== product.name
        )

        setWeddingCart(newWeddingCart)
    }

    return(
        <WeddingCartContext.Provider
            value = {{weddingCart, addToWeddingCart, removeFromWeddingCart}}
        >
            {children}
        </WeddingCartContext.Provider>
    )
}