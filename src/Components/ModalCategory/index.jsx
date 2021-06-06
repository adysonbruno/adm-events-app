import React from 'react';

import {Container} from "./style";

const ModalCategory = ({showModal, setShowModal, addToGraduationCart, product, addToConfraternizationCart, addToWeddingCart}) => {
    return (
        <>
            {
                showModal &&
                <Container>
                    <h3>Escolha em qual Categoria quer adicionar</h3>
                    <button onClick={() => {
                        addToWeddingCart(product);
                        setShowModal(false)
                    }
                    }>Casamento
                    </button>
                    <button onClick={() => {
                        addToGraduationCart(product);
                        setShowModal(false)
                    }
                    }>Formatura
                    </button>
                    <button onClick={() => {
                        addToConfraternizationCart(product);
                        setShowModal(false)
                    }
                    }>Confraternização
                    </button>
                </Container>
            }
        </>
    );
};

export default ModalCategory;
