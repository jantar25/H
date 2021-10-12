import React from 'react'
import {EditionContainer,EditionDesc,EditionCards,EditionCardsWrapper,
    EditionCard,Title,Description} from './Styles'

const index = () => {
    return (
        <EditionContainer>
            <EditionDesc>
                <p>
                    Jieleze Éditions est une maison d’édition qui promeut la liberté d’expression,
                    l’esprit de dialogue et de pacification et la culture du livre 
                    (lecture, écriture & échanges autour du livre) à travers les lettres, 
                    et surtout les jeunes lettres, dans la sous-région des Grands Lacs africains.<br/> 
                    Étymologiquement, « Jieleze » vient du Swahili et signifie en français « Exprime-toi ».<br/><br/>
                    Jieleze Éditions a 2 collections principales : 
                </p>
            </EditionDesc>
            <EditionCards>
                <EditionCardsWrapper>
                    <EditionCard>
                        <Title>Eleza</Title>
                        <Description>
                        « Eleza » vient du swahili et signifie « raconter ») 
                        pour la publication des contes, des témoignages, des biographies,
                         des récits de voyage et de la poésie 
                        </Description>
                    </EditionCard>
                    <EditionCard>
                        <Title>Orages et destinées </Title>
                        <Description>
                        Pour la publication des romans, des nouvelles et des essais.
                        </Description>
                    </EditionCard>
                </EditionCardsWrapper>
            </EditionCards>

        </EditionContainer>
    )
}

export default index
