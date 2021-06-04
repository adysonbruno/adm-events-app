import NavBar from "../../Components/NavBar";
import {useContext} from "react";
import {ProductsContext} from "../../Providers/products";
import ProductCard from "../../Components/ProductCard";

const Products = ({image_url}) => {
    const {products, getProducts} = useContext(ProductsContext)
    console.log(products)
    return (
        <div>
            <NavBar/>

            <h2>Produtos</h2>
            {products.map(product => {
             return(
                 <ProductCard
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
    );
};

export default Products;
