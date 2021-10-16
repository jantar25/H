import styled from "styled-components";


export const MailerCard = styled.section`
background:#003366;
margin:2rem;
padding:2rem;
color:#fff;
`
export const MailerWrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const MailerForm = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
grid-row: 1fr;
align-items: center;
justify-content: center;

@media screen and (max-width: 760px) {
  grid-template-columns: 1fr;
}
`

export const Part1 = styled.div`
display:flex;
flex-direction:column;
margin:2rem;
padding:2rem;
`

export const Part2 = styled.div`
display:flex;
flex-direction:column;
margin:2rem;
padding:2rem;
`
export const MailerName = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:20px;

 label{
margin-right:10px;
 }
`
export const MailerEmail = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:20px;

 label{
margin-right:10px;
 }`
export const MailerAttache = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:20px;

 label{
margin-right:10px;
 }`
export const MailerMessage = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:20px;

 label{
margin-right:10px;
 }`