import React from 'react'
import SendIcon from '@material-ui/icons/Send';
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
                    <Button><SendIcon /></Button>
                </EmailContain>
            </NewsContainerCard>
        </NewsContainer>
    )
}

export default index
