import {createContext,useState, useEffect } from "react";

export const ConfraternizationCartContext = createContext();

export const ConfraternizationCartProvider = ({children}) => {
    const [confraternizationCart, setConfraternizationCart] = useState(
        (localStorage.getItem("@AdmEvents:confraternizationCart")) ?
            JSON.parse(localStorage.getItem("@AdmEvents:confraternizationCart")) :
            []
    );

    const addToConfraternizationCart = (product) => {
        let productFind = confraternizationCart.find(productCart => productCart.name === product.name);
        if(productFind === undefined){
            product.quantity = 1;
            setConfraternizationCart([...confraternizationCart, product])
        }else{
            product.quantity += 1;
            setConfraternizationCart([...confraternizationCart])
        }
    }

    useEffect(()=>{
        localStorage.setItem("@AdmEvents:confraternizationCart",JSON.stringify(confraternizationCart))
    }, [confraternizationCart])

    const removeFromConfraternizationCart = (product) => {
        let productFind = confraternizationCart.find(productCart => productCart.name === product.name);

        if(productFind.quantity - 1 > 0){
            productFind.quantity -= 1;
            setConfraternizationCart([...confraternizationCart])
        }else{
            const newConfraternizationCart = confraternizationCart.filter(
                productOnConfraternizationCart => productOnConfraternizationCart.name !== product.name
            )
            setConfraternizationCart(newConfraternizationCart)
        }
    }

    return(
        <ConfraternizationCartContext.Provider
            value = {{confraternizationCart, addToConfraternizationCart, removeFromConfraternizationCart}}
        >
            {children}
        </ConfraternizationCartContext.Provider>
    )
}