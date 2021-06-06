import {ProductContainer} from "./style";

import {useContext, useState} from "react";

import {GraduationCartContext} from "../../Providers/graduationCart";
import {ConfraternizationCartContext} from "../../Providers/confraternizationCart";
import {WeddingCartContext} from "../../Providers/weddingCart";

import ModalCategory from "../ModalCategory";
import ModalDescription from "../ModalDescription";
import {toast} from "react-toastify";

const ProductCard = (
    {isInCart=false, keyProducts, product, img, name, brewed, description, volume, type, quantity }
) => {
    const [showModal, setShowModal] = useState(false)

    const [showModalDescription, setShowModalDescription] = useState(false)

    const {addToGraduationCart, addQuantityProductGraduation, removeFromGraduationCart, removeProductGraduation} = useContext(GraduationCartContext);
    const {addToConfraternizationCart, addQuantityProductConfraternization,removeFromConfraternizationCart, removeProductConfraternization} = useContext(ConfraternizationCartContext);
    const {addToWeddingCart, addQuantityProductWedding,removeFromWeddingCart, removeProductWedding} = useContext(WeddingCartContext);

    const switchShowModal = () => {
        if (showModal === false) {
            setShowModal(true)
        } else {
            setShowModal(false)
        }
    }

    const handleAddQuantity = (product) => {
        if (type === "graduation") {
            return addQuantityProductGraduation(product);
        }else if (type === "confraternization") {
            return addQuantityProductConfraternization(product)
        }else if (type === "wedding") {
            return addQuantityProductWedding(product);
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

    const handleRemoveProduct = (product) => {
        if (type === "graduation") {
            return removeProductGraduation(product);
        } else if (type === "confraternization") {
            return removeProductConfraternization(product)
        } else if (type === "wedding") {
            return removeProductWedding(product);
        }
    }

    return (
        <ProductContainer key={keyProducts}>
            <img src={img} alt={"product"}/>
            <h2>{name}</h2>
            {
                (isInCart && !showModal && !showModalDescription) ?
                    (
                        <div>
                            <h3>Inicio de fabricação: {brewed}</h3>
                            <button onClick={() => setShowModalDescription(true)} >Descrição</button>
                            <h3>Volume: {volume} litros</h3>
                            <h3>Quantidade:</h3>
                            <section>
                                <button onClick={ () => handleRemove (product)} >-</button>
                                <span>{quantity}</span>
                                <button onClick={() => handleAddQuantity(product)} >+</button>
                            </section>
                            <button onClick={() => handleRemoveProduct(product)}>Remover Item</button>
                        </div>
                    ): (!showModal && !showModalDescription) &&
                    (
                        <div>
                            <h3>Inicio de fabricação: {brewed}</h3>
                            <button onClick={() => setShowModalDescription(true)} >Descrição</button>
                            <h3>Volume: {volume} litros</h3>
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
