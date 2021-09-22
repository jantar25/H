import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  return (
    <BrowserRouter>
      <Home />
      <About />
    </BrowserRouter>

  );
}

export default App;
