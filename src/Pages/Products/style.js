import styled from "styled-components";

export const Container = styled.div`
  h1 {
    color: #8b2218;
  }
`

export const ProductsContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  
  button{
    margin: 10px;
  }
  
  @media (min-width: 768px){
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }
`