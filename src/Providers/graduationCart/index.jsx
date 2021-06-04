import {createContext,useState } from "react";

export const GraduationCartContext = createContext();

export const GraduationCartProvider = ({children}) => {
    const [graduationCart, setGraduationCart] = useState([]);

    const addToGraduationCart = (product) => {
        setGraduationCart([...graduationCart, product])
    }

    const removeFromGraduationCart = (product) => {
        const newGraduationCart = graduationCart.filter(
            productOnGraduationCart => productOnGraduationCart.name !== product.name
        )

        setGraduationCart(newGraduationCart)
    }

    return(
        <GraduationCartContext.Provider
            value = {{graduationCart, addToGraduationCart, removeFromGraduationCart}}
        >
            {children}
        </GraduationCartContext.Provider>
    )
}