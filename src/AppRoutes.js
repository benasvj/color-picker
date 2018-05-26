import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='/colors/:color' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
