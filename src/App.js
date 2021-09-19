import Nav from "./nav/nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import Products from "./products/products";
import Product from "./Product/Product";

function App() {
  const OnClickHandler = (e)=>{
    console.log(e.target.parentNode.childNodes[0])
    console.dir(e.target.parentNode.attributes)

  }
  return (
    <Router>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Products}/>
      <Route exact path="/product" component={Product}/>

    </Switch>

   
    </Router>
  );
}

export default App;
