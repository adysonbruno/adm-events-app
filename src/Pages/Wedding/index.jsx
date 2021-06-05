import NavBar from "../../Components/NavBar";

import {useContext} from "react";

import {WeddingCartContext} from "../../Providers/weddingCart";
import ProductCard from "../../Components/ProductCard";

const Wedding = () => {

    const {weddingCart} = useContext(WeddingCartContext)

    return (
        <div>
            <NavBar/>

            <h2>Casamento</h2>
            {weddingCart.map(product=>{
                return(
                    <ProductCard
                        isInCart
                        type={"wedding"}
                        product={product}
                        img = {product.image_url}
                        name = {product.name}
                        brewed = {product.first_brewed}
                        description = {product.description}
                        volume = {product.volume.value}
                        quantity = {product.quantity}
                    />
                )
            })}
        </div>
    )
}

export default Wedding;