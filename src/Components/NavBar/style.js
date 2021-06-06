import styled from "styled-components";

export const NavBarContainer = styled.nav`
  //background-color: #581D17;
  //background-color: #A94007;
  background-color: #E38200;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 5px double #581D17;
  
  a{
    color: #FDEB7B;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 5px;
    text-decoration: underline;
      img{
        width: 70px;
      }
  }
  
  a:focus{
    color: #581D17;
  }

  a:hover{
    color: #581D17;
  }
  
  @media (min-width: 768px){
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    a{
      font-size: 1.4rem;
          img{
            width: 100px;
          }
    }
  }

  @media (min-width: 1024px){

    a{
      font-size: 1.6rem;
    }
  }
  
`
//
// export const LinksContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//
//   @media (min-width: 768px){
//     flex-direction: row;
//   }
// `