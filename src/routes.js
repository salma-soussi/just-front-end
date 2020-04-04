import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from "./home"
import Login from "./login"
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
import Detailmode from "./collection/mode/detailmode"
import Detailbeauty from "./collection/beaute/beautedetail"
import Detailelectro from "./collection/electronique/detailelectro"
import Detailfourni from "./collection/fourniture/detailfourni"
import DetailInform from "./collection/informatique/detailInform"
import DetailSport from "./collection/sport/detailSport"
import Shop from "./shop"
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
                <Route exact path="/schoppingcard" component={Schoppingcard} />
                <Route exact path="/schop" component={Shop} />

                {/*********************les collections*********************+ */}
                <Route exact path="/mode" component={Mode} />
                <Route exact path="/eletronique" component={Eletronique} />
                <Route exact path="/sport" component={Sport} />
                <Route exact path="/fourniture" component={Fourniture} />
                <Route exact path="/beaute" component={Beaute} />
                <Route exact path="/informatique" component={Informatique} />
                {/**********details de chaque produit*****************+ */}
                <Route exact path="/detailmode" component={Detailmode} />
                <Route exact path="/detailbeauty" component={Detailbeauty} />
                <Route exact path="/detailelectro" component={Detailelectro} />
                <Route exact path="/detailfourni" component={Detailfourni} />
                <Route exact path="/detailInform" component={DetailInform} />
                <Route exact path="/detailSport" component={DetailSport} />
            </div>
        );
    }
}

export default Routes;