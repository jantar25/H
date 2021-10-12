import styled from "styled-components";

export const EditionContainer = styled.section`
display:flex;
flex-direction: column;
align-items:center;
margin:50px 70px;
padding:80px;
`
export const EditionDesc = styled.div`
width: 70%;
`
export const EditionCards = styled.div`
display: grid;
padding: 30px;
margin: 70px 50px;
`
export const EditionCardsWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-row: 1fr;
align-items: center;
justify-content: center;

@media screen and (max-width: 760px) {
  grid-template-columns: 1fr;
}
`
export const EditionCard = styled.div`
margin-right:10px;
height: 200px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
background: whitesmoke;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
transition: all 0.5s ease-in-out;
padding: 30px;
margin: 20px;
`
export const Title = styled.h1`

`

export const Description = styled.p`

`