import styled from 'styled-components'

export const AboutContent=styled.section`
height:89vh;
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
    display: block;
    width: calc(100% + 1.3px);
    height: 195px;
    transform: rotateY(180deg);
}

.shape-fill {
    fill: #000000;
}
`
