import {createContext, useState, useEffect } from "react";

export const GraduationCartContext = createContext();

export const GraduationCartProvider = ({children}) => {
    const [graduationCart, setGraduationCart] = useState(
        localStorage.getItem("@AdmEvent:graduationCart") ?
            JSON.parse(localStorage.getItem("@AdmEvent:graduationCart")) :
            []
    );

    const addToGraduationCart = (product) => {
        let productFind = graduationCart.find(productCart => productCart.name === product.name);
        if(productFind === undefined){
            product.quantity = 1;
            setGraduationCart([...graduationCart, product])
        }else{
            product.quantity += 1;
            setGraduationCart([...graduationCart])
        }
    }

    useEffect(()=>{
        localStorage.setItem("@AdmEvent:graduationCart", JSON.stringify(graduationCart))
    }, [graduationCart])

    const removeFromGraduationCart = (product) => {

        let productFind = graduationCart.find(productCart => productCart.name === product.name);

        if(productFind.quantity - 1 > 0){
            productFind.quantity -= 1;
            setGraduationCart([...graduationCart])
        }else{
            const newGraduationCart = graduationCart.filter(
                productOnConfraternizationCart => productOnConfraternizationCart.name !== product.name
            )
            setGraduationCart(newGraduationCart)
        }
    }

    return(
        <GraduationCartContext.Provider
            value = {{graduationCart, addToGraduationCart, removeFromGraduationCart}}
        >
            {children}
        </GraduationCartContext.Provider>
    )
}