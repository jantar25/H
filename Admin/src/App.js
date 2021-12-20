import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/LoginAdmin";
import { useSelector} from "react-redux";

function App() {

  // const admin=useSelector((state)=>state.user.currentUser?.isAdmin);

  return (
    <Router>
     <Topbar />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={UserList} />
        <Route path="/user/:userId" exact component={User} />
        <Route path="/newUser" exact component={NewUser} />
        <Route path="/products" exact component={ProductList} />
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/newproduct" exact component={NewProduct} />
      </Switch>
    </Router>
  );
}

export default App;
