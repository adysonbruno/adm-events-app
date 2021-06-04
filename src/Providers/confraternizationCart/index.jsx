import {createContext,useState } from "react";

export const ConfraternizationCartContext = createContext();

export const ConfraternizationCartProvider = ({children}) => {
    const [confraternizationCart, setConfraternizationCart] = useState([]);

    const addToConfraternizationCart = (product) => {
        setConfraternizationCart([...confraternizationCart, product])
    }

    const removeFromConfraternizationCart = (product) => {
        const newConfraternizationCart = confraternizationCart.filter(
            productOnConfraternizationCart => productOnConfraternizationCart.name !== product.name
        )

        setConfraternizationCart(newConfraternizationCart)
    }

    return(
        <ConfraternizationCartContext.Provider
            value = {{confraternizationCart, addToConfraternizationCart, removeFromConfraternizationCart}}
        >
            {children}
        </ConfraternizationCartContext.Provider>
    )
}