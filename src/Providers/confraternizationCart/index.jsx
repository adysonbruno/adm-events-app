import {createContext,useState, useEffect } from "react";

import {toast} from "react-toastify";

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

            toast.success(`"${product.name}" adicionado em Confraternização!!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            product.quantity = 1;
            setConfraternizationCart([...confraternizationCart, product])
        }else{

            toast.info(`"${product.name}" já foi adicionado em Confraternização!!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            product.quantity += 1;
            setConfraternizationCart([...confraternizationCart])
        }
    }


    const addQuantityProductConfraternization = (product) => {
        product.quantity += 1;
        setConfraternizationCart([...confraternizationCart])
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

            toast.error(`"${product.name}" removido de Confraternização!!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            const newConfraternizationCart = confraternizationCart.filter(
                productOnConfraternizationCart => productOnConfraternizationCart.name !== product.name
            )
            setConfraternizationCart(newConfraternizationCart)
        }
    }

    const removeProductConfraternization = (product) => {

        toast.error(`"${product.name}" removido de Confraternização!!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        const newConfraternizationCart = confraternizationCart.filter(
            productOnConfraternizationCart => productOnConfraternizationCart.name !== product.name
        )
        setConfraternizationCart(newConfraternizationCart)
    }

    return(
        <ConfraternizationCartContext.Provider
            value = {
                {
                    confraternizationCart,
                    addToConfraternizationCart,
                    removeFromConfraternizationCart,
                    removeProductConfraternization,
                    addQuantityProductConfraternization
                }
            }
        >
            {children}
        </ConfraternizationCartContext.Provider>
    )
}