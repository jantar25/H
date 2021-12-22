import { Container,Title,Table,Tr,Th,Td,Name,Date,Btn} from "./style";
import { useEffect, useState } from 'react';
import {publicRequest} from '../../requestMethode'
import {format } from 'timeago.js'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <Btn type={type}>{type}</Btn>;
  };
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    const getOrders = async ()=>{
  
      try {
        const res = await publicRequest.get("/events");
        setOrders(res.data);
      } catch (error) {
        console.log(error)
      }
     
    }
    getOrders();
  },[])
  console.log(orders)
  return (
    <Container>
      <Title>Latest Events Created</Title>
      <Table>
        <tbody>
        <Tr>
          <Th>Events</Th>
          <Th>Date</Th>
          <Th>Likes</Th>
        </Tr>
        { orders.map((order)=>(
              <Tr key={order._id}>
              <Td>
                <Name>{order.title}</Name>
              </Td>
              <Date>{format(order.createdAt)}</Date>
              <Td className="widgetLgStatus">
                <Button type={order.likes} />
              </Td>
            </Tr>
        ))  }  
        </tbody>   
      </Table>
    </Container>
  );
}
