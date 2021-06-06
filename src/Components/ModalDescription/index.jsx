import React from 'react';

import {Container} from "./style";

const ModalDescription = ({showModalDescription, setShowModalDescription, description}) => {
    return (
        <>
            {
                showModalDescription &&
                <Container>
                    <h3>Descrição:</h3>
                    <h4>{description}</h4>
                    <button onClick={() => setShowModalDescription(false)}>Voltar</button>
                </Container>
            }
        </>
    );
};

export default ModalDescription;
