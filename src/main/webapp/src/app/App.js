import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }



  componentDidMount() {

  }

  render() {

//      return <LoadingIndicator />


    return (
      <div className="app">
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Alert stack={{limit: 3}}
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

export default App;
