import NavBar from "../../Components/NavBar";
import {useContext} from "react";
import {ProductsContext} from "../../Providers/products";
import ProductCard from "../../Components/ProductCard";
import {ProductsContainer, Container} from "./style";

const Products = () => {
    const {products} = useContext(ProductsContext)
    return (
        <Container>
            <NavBar/>
            <h1>Produtos</h1>
            <ProductsContainer>
                {products.map(product => {
                    return(
                        <ProductCard
                            keyProducts = {product.id}
                            product={product}
                            img = {product.image_url}
                            name = {product.name}
                            brewed = {product.first_brewed}
                            description = {product.description}
                            volume = {product.volume.value}
                        />
                    )
                })}
            </ProductsContainer>
        </Container>
    );
};

export default Products;