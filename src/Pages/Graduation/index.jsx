import NavBar from "../../Components/NavBar";

import {useContext} from "react";

import {GraduationCartContext} from "../../Providers/graduationCart";
import ProductCard from "../../Components/ProductCard";
import {Container, GraduationContainer} from "./style";

const Graduation = () => {

    const {graduationCart} = useContext(GraduationCartContext)

    const total = graduationCart.reduce((acc, product) => acc + product.quantity, 0)

    return (
        <Container>
            <NavBar/>

            <h1>Formatura</h1>
            <h5>Quantidade total: <span>{total > 1 ? ` ${total} itens`: `${total} item` } </span></h5>
            <GraduationContainer>
                {graduationCart.map(product=>{
                    return(
                        <ProductCard
                            isInCart
                            type={"graduation"}
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
            </GraduationContainer>
        </Container>
    )
}

export default Graduation;