import React from 'react'
import Event1 from "../../../images/jelele.JPG"
import {Header,Title,HeaderImg} from './Styles'

const Head = () => {
    return (
        <div>
            <Header>
                <HeaderImg src={Event1} alt={Event1} />
                <Title>JIELELE Edition</Title>
            </Header>
        </div>
    )
}

export default Head
