import React, { useState } from 'react'
import { Container,Input,Button,Title,Form } from './styles'
import {useDispatch} from 'react-redux'
import {login} from '../../Redux/apiCalls'
import { useHistory } from 'react-router'


const LoginAdmin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();


    const HandleClick = (e) =>{
        e.preventDefault();
        login(dispatch,{username,password});
        history.push("/");
    };

    return (
        <Container>
            <Form>
                <Title>ADMIN LOGIN</Title>
                <Input type='text' placeholder='username' onChange={e=>setUsername(e.target.value)} />
                <Input type='password' placeholder='password' onChange={e=>setPassword(e.target.value)} />
                <Button onClick={HandleClick} >LOGIN</Button>
            </Form>
        </Container>
    )
}

export default LoginAdmin
