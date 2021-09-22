import styled from 'styled-components'

export const AboutContent=styled.section`
height:100vh;
max-heigth:1100px;
position:relative;
overflow:hidden;
`

export const AboutSvg=styled.div`
 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

svg {
    position: relative;
    display: flex;
    width: calc(100% + 1.3px);
    height: 195px;
    transform: rotateY(180deg);
}

.shape-fill {
    fill: #000000;
}
`
export const AboutWrapper=styled.div`
display:grid;
z-index:1;
height:860px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 24px;
justify-content:center;
`

export const AboutRows=styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center:
grid-templates-area:${({imgStart})=>(
    imgStart?`'col2 col1'` : `'col1 col2'`
)}

@media screen and (max-width:760px){
    grid-templates-area:${({imgStart})=>(
        imgStart?`'col1' 'col2'` : `'col1 col1' 'col2 col2'`
    )}
}
`

export const AboutColumn1=styled.div`
margin-bottom:15px;
padding:0 16px;
grid-area:col1;
`
export const AboutColumn2=styled.div`
margin-bottom:15px;
padding:0 16px;
grid-area:col2;
`

export const Question=styled.div``

export const Heading=styled.div``

export const Description=styled.div``

export const BtnWrap=styled.div`

`

export const Button=styled.button``