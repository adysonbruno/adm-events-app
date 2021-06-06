import styled from "styled-components";

export const Container = styled.div`
  h1{
    margin: 20px 0 10px ;
    color: #8b2218;
  }
  
  h5{
    margin: 10px 0 15px;
    font-size: 1.2rem;
    color: #8b2218;
  }
  
  span{
    color: red;
  }
`

export const GraduationContainer = styled.div`

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