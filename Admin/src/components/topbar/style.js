import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 50px;
background-color: white;
position: sticky;
top: 0;
z-index: 999;
background: black;
`

export const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
width: 120px;
cursor: pointer;
`

export const Left = styled.div`
    display: flex;
    align-items: center;
`

export const Right = styled.div`
    display: flex;
    align-items: center;
`

export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  color: #cacebf;
  &:hover{
    color:orange;
  }
`

export const Image = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`

export const Button = styled.button`
padding: 7px 15px;
border: none;
background-color: orange;
font-weight:600;
border-radius:10px;
margin:0px 10px;
cursor:pointer;
&:hover{
  color: white;
}
`
