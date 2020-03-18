import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from "./home"
import Login from "./Login"
import Login2 from './Login2'
import Signup from './Signup'
import Signup2 from './Signup2'
class Routes extends Component {
    render() { 
        return (
            <div>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/loginasbuyer" component={Login} />
            <Route exact path="/loginasseller" component={Login2} />
            <Route exact path="/signupasbuyer" component={Signup} />
            <Route exact path="/signupasseller" component={Signup2} />
            </div>
        );
    }
}
 
export default Routes;