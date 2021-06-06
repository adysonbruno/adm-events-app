import {createContext, useState, useEffect } from "react";
import {toast} from "react-toastify";

export const WeddingCartContext = createContext();

export const  WeddingCartProvider = ({children}) => {
    const [ weddingCart, setWeddingCart] = useState(
        (localStorage.getItem("@AdmEvent:weddingCart")) ?
            JSON.parse(localStorage.getItem("@AdmEvent:weddingCart")) :
            []
    );

    const addToWeddingCart = (product) => {

        let productFind = weddingCart.find(productCart => productCart.name === product.name);

        if(productFind === undefined){

            toast.success(`"${product.name}" adicionado em Casamento!!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            product.quantity = 1;
            setWeddingCart([...weddingCart, product])
        }else{

            toast.info(`"${product.name}" já foi adicionado em Casamento!!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            product.quantity += 1;
            setWeddingCart([...weddingCart])
        }
    }

    const addQuantityProductWedding = (product) => {
        product.quantity += 1;
        setWeddingCart([...weddingCart])
    }

    useEffect(()=>{
        localStorage.setItem("@AdmEvent:weddingCart", JSON.stringify((weddingCart)))
    }, [weddingCart])

    const removeFromWeddingCart = (product) => {
        let productFind = weddingCart.find(productCart => productCart.name === product.name);

        if(productFind.quantity - 1 > 0){
            productFind.quantity -= 1;
            setWeddingCart([...weddingCart])
        }else{

            toast.error(`"${product.name}" removido de Casamento!!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            const newWeddingCart = weddingCart.filter(
                productOnConfraternizationCart => productOnConfraternizationCart.name !== product.name
            )
            setWeddingCart(newWeddingCart)
        }
    }

    const removeProductWedding = (product) => {

        toast.error(`"${product.name}" removido de Casamento!!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        const newWeddingCart = weddingCart.filter(
            productOnConfraternizationCart => productOnConfraternizationCart.name !== product.name
        )
        setWeddingCart(newWeddingCart)
    }

    return(
        <WeddingCartContext.Provider
            value = {
                {
                    weddingCart,
                    addToWeddingCart,
                    removeFromWeddingCart,
                    removeProductWedding,
                    addQuantityProductWedding
                }
            }
        >
            {children}
        </WeddingCartContext.Provider>
    )
}