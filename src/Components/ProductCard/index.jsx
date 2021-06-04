import {ProductContainer} from "./style";

import {useContext, useState} from "react";

import {GraduationCartContext} from "../../Providers/graduationCart";
import {ConfraternizationCartContext} from "../../Providers/confraternizationCart";
import {WeddingCartContext} from "../../Providers/weddingCart";

import ModalCategory from "../ModalCategory";


const ProductCard = ({product, img, name, brewed, description, volume, type}) => {

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
        <ProductContainer>
            <img src={img} alt={"product"}/>
            <h2>{name}</h2>
            <h3>{brewed}</h3>
            <h3>{description}</h3>
            <h3>{volume}</h3>
            <button onClick={() => switchShowModal()}>Add to...</button>
            <button onClick={() => handleRemove(product)}>Remove from...</button>
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
