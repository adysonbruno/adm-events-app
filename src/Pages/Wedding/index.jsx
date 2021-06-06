import NavBar from "../../Components/NavBar";

import {useContext} from "react";

import {WeddingCartContext} from "../../Providers/weddingCart";
import ProductCard from "../../Components/ProductCard";
import {Container, WeddingContainer} from "./style";

const Wedding = () => {

    const {weddingCart} = useContext(WeddingCartContext)

    const total = weddingCart.reduce((acc, product) => acc + product.quantity, 0)

    return (
        <Container>
            <NavBar/>
            <h1>Casamento</h1>
            <h5>Quantidade total: <span>{total > 1 ? ` ${total} itens`: `${total} item` }</span></h5>
            <WeddingContainer>
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
            </WeddingContainer>
        </Container>
    )
}

export default Wedding;