import {createContext, useState, useEffect } from "react";

export const WeddingCartContext = createContext();

export const  WeddingCartProvider = ({children}) => {
    const [ weddingCart, setWeddingCart] = useState(
        (localStorage.getItem("AdmEvent:weddingCart")) ?
            JSON.parse(localStorage.getItem("AdmEvent:weddingCart")) :
            []
    );

    const addToWeddingCart = (product) => {
        setWeddingCart([...weddingCart, product])
    }

    useEffect(()=>{
        localStorage.setItem("AdmEvent:weddingCart", JSON.stringify((weddingCart)))
    }, [weddingCart])

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