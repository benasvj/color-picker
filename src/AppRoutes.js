import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Level from './components/Level';

class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='/colors/:color' component={Home}/>
            <Route exact path='/quiz' component={Quiz}/>
            <Route exact path='/quiz/:color' component={Level}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
