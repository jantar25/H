import React from 'react'
import {NewsContainer,NewsContainerCard,EmailContain,Button} from './Styles'


const index = () => {
    return (
        <NewsContainer>
            <NewsContainerCard>
                <h1>Inscrivez-vous pour recevoir des mises à jour sur nos evenement,
                    nos ateliers et plus encore :
                </h1>
                <EmailContain>
                    <input type='userEmail' name='email' placeholder="you@email.com" />
                    <Button>S'abonner</Button>
                </EmailContain>
            </NewsContainerCard>
        </NewsContainer>
    )
}

export default index
