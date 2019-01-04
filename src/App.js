import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route path="/" render={ 
            () => {

                return(<h1>Home page</h1>)
            }
          } />


          <Route path="/contact"  exact render={ 
            () => {

                return(<h1>Home page</h1>)
            }
          } />


        </div>
      </Router>

    );
  }
}

export default App;
