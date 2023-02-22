import React from 'react'
import '../styles/App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div id="main">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Product />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}


export default App;
