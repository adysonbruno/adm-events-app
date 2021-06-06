import { createContext, useState, useEffect } from "react";

import axios from "axios"

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios
            .get("https://api.punkapi.com/v2/beers")
            .then(response => setProducts(response.data))
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{products, getProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}