import NavBar from "../../Components/NavBar";

import {useContext} from "react";

import {ConfraternizationCartContext} from "../../Providers/confraternizationCart";
import ProductCard from "../../Components/ProductCard";

const Confraternization = () => {

    const {confraternizationCart} = useContext(ConfraternizationCartContext)

    return (
        <div>
            <NavBar/>

            <h2>Confraternização</h2>
            {confraternizationCart.map(product=>{
                return(
                    <ProductCard
                        type={"confraternization"}
                        product={product}
                        img = {product.image_url}
                        name = {product.name}
                        brewed = {product.first_brewed}
                        description = {product.description}
                        volume = {product.volume.value}
                    />
                )
            })}
        </div>
    )
}

export default Confraternization;