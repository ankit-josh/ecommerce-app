import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import { Route, Switch } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products/:id" component={Product}></Route>
      </Switch>
    </>
  );
}

export default App;
