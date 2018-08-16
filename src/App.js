import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import './skeleton.css';
import './App.css'
import Resultados from './Results';
import Principal from './Principal';

class App extends Component {

  render() {
    return (
      <div>
      <div className = "header">
      </div>
      <div className = "header2">
      </div>
      <div className = "header">
      </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Principal}/>
            <Route path="/resultados/:usuario" component={Resultados}/>
          </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;

