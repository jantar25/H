import { useState } from 'react';
import {Container,Title,Form,Item,Label,Input,Button,InputItems} from './style'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../Redux/apiCalls'



export default function NewProduct() {
const [inputs,setInputs] = useState({});
const [file,setFile] = useState(null);
const dispatch = useDispatch();

const handleChange = (e)=>{
  setInputs(prev=>{
    return  {...prev,[e.target.name]:e.target.value} 
  })
}


const handleClick = (e)=>{
  e.preventDefault();
  const fileName = new Date().getTime() + file.name;
  const storage = getStorage(app); 
  const storageRef = ref(storage,fileName);  
  const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const product = {...inputs,img: downloadURL};
      addProduct(product,dispatch);
    });
  }
);
}
  return (
    <Container>
      <Title>New Event</Title>
      <Form>
      <InputItems>
          <Item>
            <Label>Title</Label>
            <Input name="title" type="text" placeholder="Goma show" onChange={handleChange} />
          </Item>
          <Item>
            <Label>Description</Label>
            <Input name="description" type="text" placeholder="...." onChange={handleChange}  />
          </Item>
        </InputItems>
        <InputItems>
          <Item>
            <Label>Image</Label>
            <Input type="file" id="file" onChange={e=>setFile(e.target.files[0])} />
          </Item>
        </InputItems>
        <Button onClick={handleClick} >Create</Button>
      </Form>
    </Container>
  );
}
