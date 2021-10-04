import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { useState } from "react";
import Navbar from './Components/Navbar'
import Sidebar from './Components/Navbar/Sidebar';
import Home from './Pages/Home'
import Edition from './Pages/Edition'
import SignIn from './Pages/SignIn'
import Programs from './Components/Programs'
import Events from './Components/Events'
import Footer from "./Components/Footer";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Events' exact component={Events} />
        <Route path='/Programs' exact component={Programs} />
        <Route path='/Edition' exact component={Edition} />
        <Route path='/SignIn' exact component={SignIn} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
