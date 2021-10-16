import React from 'react'
import emailjs from 'emailjs-com'
import {MailerCard,MailerWrap,MailerForm,Part1,Part2,MailerName,
    MailerEmail,MailerAttache,MailerMessage} from './style'

const index = () => {

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_j0lf0ze','template_svwr1ut',
        e.target,"user_p6Z8erkcnfbXKsrc63eXs").then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    return (
        <MailerCard>
            <MailerWrap>
                <h1>submit form</h1>
                <MailerForm onSubmit={sendEmail}>
                    <Part1>
                        <MailerName>
                            <label>Name</label>
                            <input type='text' name='name' />
                        </MailerName>
                        <MailerEmail>
                            <label>Email</label>
                            <input type='userEmail' name='email' />
                        </MailerEmail>
                        <MailerAttache>
                            <label>Attache file</label>
                            <input type="file" id="myFile" name="filename" />
                        </MailerAttache>
                    </Part1>
                    <Part2>
                        <MailerMessage>
                            <label>Message</label>
                            <textarea name='message' rows='4' />
                        </MailerMessage>
                        
                        <input type='submit' value='send' />
                    </Part2>
                </MailerForm>
            </MailerWrap>
        </MailerCard>
    )
}

export default index
