import {ProductContainer} from "./style";

import {useContext, useState} from "react";

import {GraduationCartContext} from "../../Providers/graduationCart";
import {ConfraternizationCartContext} from "../../Providers/confraternizationCart";
import {WeddingCartContext} from "../../Providers/weddingCart";

import ModalCategory from "../ModalCategory";


const ProductCard = (
    {isInCart=false, keyProducts, product, img, name, brewed, description, volume, type, quantity }
) => {
    const [showModal, setShowModal] = useState(false)

    const {addToGraduationCart, removeFromGraduationCart} = useContext(GraduationCartContext);
    const {addToConfraternizationCart, removeFromConfraternizationCart} = useContext(ConfraternizationCartContext);
    const {addToWeddingCart, removeFromWeddingCart} = useContext(WeddingCartContext);

    const switchShowModal = () => {
        if (showModal === false) {
            setShowModal(true)
        } else {
            setShowModal(false)
        }
    }

    const handleAdd = (product) => {
        if (type === "graduation") {
            return addToGraduationCart(product);
        } else if (type === "confraternization") {
            return addToConfraternizationCart(product)
        } else if (type === "wedding") {
            return addToWeddingCart(product);
        }
    }

    const handleRemove = (product) => {
        if (type === "graduation") {
            return removeFromGraduationCart(product);
        } else if (type === "confraternization") {
            return removeFromConfraternizationCart(product)
        } else if (type === "wedding") {
            return removeFromWeddingCart(product);
        }
    }

    return (
        <ProductContainer key={keyProducts}>
            <img src={img} alt={"product"}/>
            <h2>Nome: {name}</h2>
            <h3>Data Inicio de fabricação: {brewed}</h3>
            <details>
                <summary>Descrição</summary>
                <p>
                    {description}
                </p>
            </details>
            <h3>Quantidade de litros: {volume} litros</h3>
            {
                isInCart ?
                    (
                        <>
                            <h2>Quantidade:</h2>
                            <div>
                                <button onClick={ () => handleRemove (product)} >-</button>
                                {quantity}
                                <button onClick={() => handleAdd(product)} >+</button>
                            </div>
                            <button onClick={() => handleRemove(product)}>Remover Item</button>
                        </>
                    ):
                    (<button onClick={() => switchShowModal()}>Add to...</button>)
            }
            <ModalCategory
                showModal={showModal}
                setShowModal = {setShowModal}
                product={product}
                addToGraduationCart={addToGraduationCart}
                addToConfraternizationCart={addToConfraternizationCart}
                addToWeddingCart={addToWeddingCart}
            />
        </ProductContainer>
    );
};

export default ProductCard;
