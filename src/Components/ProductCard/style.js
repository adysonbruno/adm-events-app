import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 5px double black;
  margin: 20px 10px;
  padding: 10px;
  background-color: #FDEB7B;
  color: #581D17;
  width: 80%;
  max-width: 500px;
  height: 690px;

  img{
    height: 200px;
    margin: 10px;
  }
  
  h2{
    margin: 20px 0;
    padding: 1px;
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    background-color: #581D17;
    color: whitesmoke; 
  }
    
  div{
    span{
      font-size: 1.3rem;
    }
  }
  
  button{
    margin: 20px;
    color: #581D17;
    box-sizing: border-box;
    font-size: 1.2rem;
    font-weight: bold;
    height: 40px;
    padding: 10px 15px;
    background-color: #f9ad29;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  button:hover{
    background-color: #581D17;
    color: #f9ad29;
  }
  
  @media (min-width: 768px){
    width: 30%;
    min-width: 400px;
  }
`