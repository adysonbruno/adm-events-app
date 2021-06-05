import {createContext,useState, useEffect } from "react";

export const ConfraternizationCartContext = createContext();

export const ConfraternizationCartProvider = ({children}) => {
    const [confraternizationCart, setConfraternizationCart] = useState(
        (localStorage.getItem("@AdmEvents:confraternizationCart")) ?
            JSON.parse(localStorage.getItem("@AdmEvents:confraternizationCart")) :
            []
    );

    const addToConfraternizationCart = (product) => {

        setConfraternizationCart([...confraternizationCart, product])
    }

    useEffect(()=>{
        localStorage.setItem("@AdmEvents:confraternizationCart",JSON.stringify(confraternizationCart))
    }, [confraternizationCart])

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