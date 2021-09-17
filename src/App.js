import './App.css';
import Navbar from './Components/Navbar'
import Sidebar from './Components/Navbar/Sidebar'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
