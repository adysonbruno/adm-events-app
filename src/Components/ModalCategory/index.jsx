import React from 'react';

import {Container} from "./style";

const ModalCategory = ({showModal, setShowModal, addToGraduationCart, product, addToConfraternizationCart, addToWeddingCart}) => {
    return (
        <>
            {
                showModal &&
                <Container>
                    <h3>Em qual Categoria quer adicionar?</h3>
                    <section>
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
                        <button className={"come-back"} onClick={() => setShowModal(false)} >Voltar</button>
                    </section>
                </Container>
            }
        </>
    );
};

export default ModalCategory;
