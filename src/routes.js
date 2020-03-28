import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from "./home"
import Login from "./Login"
import Login2 from './Login2'
import Signup from './Signup'
import Signup2 from './Signup2'
import Contact from "./contact"
import Mode from "./collection/mode/mode"
import Schoppingcard from "./shoppingcard"
import Eletronique from "./collection/electronique/eletro"
import Sport from "./collection/sport/sport"
import Fourniture from "./collection/fourniture/fourniture"
import Beaute from "./collection/beaute/beaute"
import Informatique from "./collection/informatique/informatique"
class Routes extends Component {
    render() { 
        return (
            <div>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/loginasbuyer" component={Login} />
            <Route exact path="/loginasseller" component={Login2} />
            <Route exact path="/signupasbuyer" component={Signup} />
            <Route exact path="/signupasseller" component={Signup2} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/mode" component={Mode} />
            <Route exact path="/schoppingcard" component={Schoppingcard} />
            <Route exact path="/eletronique" component={Eletronique} />
            <Route exact path="/sport" component={Sport} />
            <Route exact path="/fourniture" component={Fourniture} />
            <Route exact path="/beaute" component={Beaute} />
            <Route exact path="/informatique" component={Informatique} />
            </div>
        );
    }
}
 
export default Routes;