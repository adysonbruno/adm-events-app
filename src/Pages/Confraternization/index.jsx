import NavBar from "../../Components/NavBar";

import {useContext} from "react";

import {ConfraternizationCartContext} from "../../Providers/confraternizationCart";
import ProductCard from "../../Components/ProductCard";
import {ConfraternizationContainer, Container} from "./style";

const Confraternization = () => {

    const {confraternizationCart} = useContext(ConfraternizationCartContext)

    const total = confraternizationCart.reduce((acc, product) => acc + product.quantity, 0)

    return (
        <Container>
            <NavBar/>

            <h1>Confraternização</h1>
            <h5>Quantidade total: <span>{total > 1 ? ` ${total} itens`: `${total} item` }</span> </h5>
            <ConfraternizationContainer>
                {confraternizationCart.map(product=>{
                    return(
                        <ProductCard
                            isInCart
                            type={"confraternization"}
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
            </ConfraternizationContainer>
        </Container>
    )
}

export default Confraternization;