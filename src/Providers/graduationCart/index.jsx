import {createContext, useState, useEffect } from "react";
import {toast} from "react-toastify";

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

            toast.success(`"${product.name}" adicionado em Formatura!!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            product.quantity = 1;
            setGraduationCart([...graduationCart, product])
        }else{

            toast.info(`"${product.name}" já foi adicionado em Formatura!!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            product.quantity += 1;
            setGraduationCart([...graduationCart])
        }
    }

    const addQuantityProductGraduation = (product) => {
        product.quantity += 1;
        setGraduationCart([...graduationCart])
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

            toast.error(`"${product.name}" removido de Formatura!!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });


            const newGraduationCart = graduationCart.filter(
                productOnConfraternizationCart => productOnConfraternizationCart.name !== product.name
            )
            setGraduationCart(newGraduationCart)
        }
    }

    const removeProductGraduation = (product) => {

        toast.error(`"${product.name}" removido de Formatura!!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });


        const newGraduationCart = graduationCart.filter(
            productOnConfraternizationCart => productOnConfraternizationCart.name !== product.name
        )
        setGraduationCart(newGraduationCart)
    }

    return(
        <GraduationCartContext.Provider
            value = {
                {
                    graduationCart,
                    addToGraduationCart,
                    removeFromGraduationCart,
                    removeProductGraduation,
                    addQuantityProductGraduation
                }
            }
        >
            {children}
        </GraduationCartContext.Provider>
    )
}