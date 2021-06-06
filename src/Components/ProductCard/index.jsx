import {ProductContainer} from "./style";

import {useContext, useState} from "react";

import {GraduationCartContext} from "../../Providers/graduationCart";
import {ConfraternizationCartContext} from "../../Providers/confraternizationCart";
import {WeddingCartContext} from "../../Providers/weddingCart";

import ModalCategory from "../ModalCategory";
import ModalDescription from "../ModalDescription";


const ProductCard = (
    {isInCart=false, keyProducts, product, img, name, brewed, description, volume, type, quantity }
) => {
    const [showModal, setShowModal] = useState(false)

    const [showModalDescription, setShowModalDescription] = useState(false)

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
            <h2>{name}</h2>
            <h3>Inicio de fabricação: {brewed}</h3>
            <button onClick={() => setShowModalDescription(true)} >Descrição</button>
            <h3>Volume: {volume} litros</h3>
            {
                (isInCart && !showModal && !showModalDescription) ?
                    (
                        <div>
                            <h3>Quantidade:</h3>
                            <div>
                                <button onClick={ () => handleRemove (product)} >-</button>
                                <span>{quantity}</span>
                                <button onClick={() => handleAdd(product)} >+</button>
                            </div>
                            <button onClick={() => handleRemove(product)}>Remover Item</button>
                        </div>
                    ): (!showModal && !showModalDescription) &&
                    (
                        <div>
                            <button onClick={() => switchShowModal()}>Adicionar</button>
                        </div>
                    )
            }
            <ModalDescription
                showModalDescription={showModalDescription}
                setShowModalDescription = {setShowModalDescription}
                description = {description}
            />
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
