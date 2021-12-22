import {Container,Title,List,ListItem,Image,User,Username,Button} from './style';
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import {publicRequest} from '../../requestMethode'

export default function WidgetSm() {

  const [users,setUsers] = useState([]);

useEffect(()=>{
  const getUsers = async ()=>{

    try {
      const res = await publicRequest.get("/subscriber");
      setUsers(res.data);
    } catch (error) {
      console.log(error)
    }
   
  }
  getUsers();
},[])

  return (
    <Container>
      <Title>New Join Subscribers</Title>
      <List>
        {users.map((user)=>(
        <ListItem key= {user._id}>
          <Image src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} />
          <User>
            <Username>{user.email}</Username>
          </User>
          <Button>
            <Visibility fontSize="small" />
            Display
          </Button>
        </ListItem>
        ))}
      </List>
    </Container>
  );
}
