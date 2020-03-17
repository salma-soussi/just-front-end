import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from "./home"
import Login from "./login"
import Register from "./register"
class Routes extends Component {
    render() { 
        return (
            <div>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            </div>
        );
    }
}
 
export default Routes;