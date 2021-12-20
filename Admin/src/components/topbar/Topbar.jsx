import React from "react";
import decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import { useEffect} from 'react';
import { useHistory,useLocation } from 'react-router';
import { logoutDone } from '../../Redux/apiCalls'; 
import {Link} from 'react-router-dom';
import logo from "../../Images/logoH.png";
import {Container,Wrapper,Logo,Right,Left,IconContainer,Image,Button} from './style';

export default function Topbar() {

  const dispatch=useDispatch();
  const history= useHistory();
  const location= useLocation()
  const Logout=()=>{
    logoutDone(dispatch);
    history.push('/');
}

useEffect(()=>{
  const token=JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.accessToken;
 if(token){
     const decodedToken=decode(token);
     const today = new Date().getTime();
     const inToken=decodedToken.exp*1000;
     if (inToken < today) {
      logoutDone(dispatch);
      history.push('/');
     };
   }
},[location,history,dispatch])

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={logo}/>
        </Left>
        <Right>
          <Link to="/users">
            <IconContainer>Users</IconContainer>
          </Link>
          <Link to="/products">
            <IconContainer>Events</IconContainer>
          </Link>
          <Link>
            <IconContainer>Programs</IconContainer>
          </Link>
          <Button onClick={Logout}>LOG OUT</Button>
          <Image src={"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} />
        </Right>
      </Wrapper>
    </Container>
  );
}
