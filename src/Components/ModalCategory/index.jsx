import React from 'react';

const ModalCategory = ({showModal, setShowModal, addToGraduationCart, product, addToConfraternizationCart, addToWeddingCart}) => {
    return (
        <>
            {
                showModal &&
                <div>
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
                </div>
            }
        </>
    );
};

export default ModalCategory;
