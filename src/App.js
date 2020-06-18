import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {ShopNew} from './pages/ShopNew';
import {ShopOld} from './pages/ShopOld';
import {DontShop} from './pages/DontShop';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar></NavBar>
          <div class="container-fluid">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/shopnew" component={ShopNew}></Route>
            <Route path="/shopold" component={ShopOld}></Route>
            <Route path="/dontshop" component={DontShop}></Route>
          </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </>
    );
  }
}

export default App;
