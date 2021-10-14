import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
//   import { Provider } from "./Components";
import Content from './components/content/content'
import Search from './components/search/search'
import Product from './components/Product/product'
import Cart from './components/Cart/cart'
import Orders from './components/Orders/orders'
import ProtectedRoute from './ProtectedRoute'

import './styles.css'
import Home from './home'
import SignIn from './SignIn'
import SignUp from './SignUp'
function App() {
   
  return (
    <div className="app">
    <Router>
      <Switch>
      <ProtectedRoute exact path="/" component={Content} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
        <ProtectedRoute exact path="/shop" component={Search} />
        <ProtectedRoute exact path="/shop/:shoe" component={Search} />
        <ProtectedRoute exact path="/product/:id" component={Product} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/orders" component={Orders} />
      {/* <Content /> */}
      {/* <Cards /> */}
      </Switch>
      </Router>
      </div>
  )
      
   
}
export default App;