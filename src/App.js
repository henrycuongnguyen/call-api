import React, { Component } from 'react';
import { Fragment } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      //Router = BrowserRouter boc ngoai toan bo
      <Router>
        <Fragment>
          <Menu />
          <div className="container">
            
            <div className="row">
              {/* this row load from ProductListPAge */}
              {this.showContentMenu(routes)}
            </div>
            
          </div>
          
          </Fragment>
      </Router>
    );
  }
//Route la phan noi dung thay doi khi  url thay doi
//path la gi thi load component do
  showContentMenu = (routes) => {
    var result = null;
    if(routes.length >0 ){
      result = routes.map((route, index) => {
          return (
          <Route
            key = {index}
            path = {route.path}
            exact = {route.exact}
            component= {route.main}
          />);
      });
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
