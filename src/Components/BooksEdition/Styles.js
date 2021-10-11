import styled from "styled-components";


export const BooksContent = styled.section`
    background: #fff;

  h1 {
    font-size: 2.5rem;
    color: #003366;
    margin: 30px 50px;
    width: 80%;
    border-bottom: 2px solid #a36a00;
  }
`;

export const BooksTrail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  margin:20px;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }

  h2{
    font-size: 2.5rem;
    color: gray; 
  }
`;

export const BookCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px 70px;
`

export const BookImg = styled.img`
width:250px;
margin-bottom:10px;
`

export const BookDescription = styled.div`
width:250px;
margin-bottom:10px;
`

export const BookBtn = styled.button`
width:150px;
`