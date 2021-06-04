import NavBar from "../../Components/NavBar";

import {useContext} from "react";

import {GraduationCartContext} from "../../Providers/graduationCart";
import ProductCard from "../../Components/ProductCard";

const Graduation = () => {

    const {graduationCart} = useContext(GraduationCartContext)

    return (
        <div>
            <NavBar/>

            <h2>Graduação</h2>
            {graduationCart.map(product=>{
                return(
                    <ProductCard
                        type={"graduation"}
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

export default Graduation;