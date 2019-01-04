import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, NavLink , Redirect, Switch} from 'react-router-dom';

  //stateless component
  const News = ({ match }) => {
    return(<h1>News page: { match.params.id }</h1>)
  };


  const Profile = () => {
    return(<h1>Profile Page</h1>)
  };

  const Error = () => {
    return(<h1>404</h1>)
  };


class App extends Component {

  state = {
    loggedIn : false
  }

	onClickButton = () => {
	  this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  };


  render() {
    return (

      
        <Router>
          <div>

          <NavLink activeStyle={{ color : "red" }}  exact to="/">-Homepage</NavLink> <br/>
          <NavLink activeClassName="active-class" exact to="/contact">-Contact</NavLink>   <br/>
          <NavLink activeStyle={{ color : "red" }}  exact to="/news/2">-News</NavLink>  <br/>
          <NavLink activeStyle={{ color : "red" }}  exact to="/profile">-Profile</NavLink>  <br/>

          <br/><br/>

          <input
              type="button"
              onClick={this.onClickButton}
              value={ this.state.loggedIn ? 'Logout': 'Login' }
            />
          
          <Switch>

            <Route path="/" exact render={ 
              () => {

                  return(<h1>Home page</h1>)
              }
            } />

            <Route path="/contact"  exact render={  //strict
                    () => {

                  return(<h1>Contact</h1>)
              }
            } />

            <Route path="/news/:id"  exact strict component={News} />


            <Route path="/profile" exact strict render={ () => (
              this.state.loggedIn ? ( <Profile/>) : (<Redirect to="/" />)
            )} />

            <Route component={Error} />

          </Switch> 

        </div>
      </Router>

    );
  }
}

export default App;
