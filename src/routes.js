import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from "./site-visiteur/home"
import Login from "./site-visiteur/login"
import Login2 from './site-visiteur/Login2'
import Signup from './site-visiteur/Signup'
import Signup2 from './site-visiteur/Signup2'
import Contact from "./site-visiteur/contact"
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
import Shop from "./site-visiteur/shop"

import BuyerDashboard from "./Buyer-dashboard/components/dashboard"
import NewRequest from "./Buyer-dashboard/components/NewRequest"
import profileBuyer from "./Buyer-dashboard/components/profilBuyer"
import AllQuotationSent from "./Buyer-dashboard/components/AllQuotationSent"
import AllQuotationReceived from "./Buyer-dashboard/components/AllQuotationReceived"
import AllPurchases from "./Buyer-dashboard/components/AllPurchases"
import QuotationSend from "./Buyer-dashboard/Quotation_status/QuotationSend"
import QuotationReceived from "./Buyer-dashboard/Quotation_status/QuotationReceived"
import QuotationClosed from "./Buyer-dashboard/Quotation_status/QuotationClosed"

import SellerDashboard from "./Seller-dashboard/dashboard_Cards/Dashboard"
import RequestQuotation from "./Seller-dashboard/components/requestQuotation"
import AnsweredQuotation from "./Seller-dashboard/components/AnsweredQuotation"
import SoldItems from "./Seller-dashboard/components/SoldItems"
import Customers from "./Seller-dashboard/components/Customers"
import profileSeller from "./Seller-dashboard/components/Profile"
import Stats from "./Seller-dashboard/components/Stats"
import AnsweredQuotationTemplate from './Seller-dashboard/Quotation_Status/AnsweredQuotationTemplate';
import QuotationForm from "./Seller-dashboard/Quotation_Status/QuotationForm"
import QuotationReqTemplate from "./Seller-dashboard/Quotation_Status/QuotationReqTemplate"
import SoldQuotation from "./Seller-dashboard/Quotation_Status/SoldQuotation"
import customerContact from "./Seller-dashboard/components/CustomerContact"

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

                {/*********************dashboard-buyer*********************+ */}
                <Route exact path="/buyer_dashboard" component={BuyerDashboard} />
                <Route exact path="/buyer_dashboard/new-request" component={NewRequest} />
                <Route exact path="/buyer_dashboard/profile" component={profileBuyer} />
                <Route exact path="/buyer_dashboard/all-quotation-sent" component={AllQuotationSent} />
                <Route exact path="/buyer_dashboard/all-quotation-received" component={AllQuotationReceived} />
                <Route exact path="/buyer_dashboard/all-purchases" component={AllPurchases} />
                <Route exact path="/buyer_dashboard/quotation-sent" component={QuotationSend} />
                <Route exact path="/buyer_dashboard/quotation-received" component={QuotationReceived} />
                <Route exact path="/buyer_dashboard/quotation-closed" component={QuotationClosed} />

                {/*********************dashboard-seller********************* */}
                <Route exact path="/seller_dashboard" component={SellerDashboard} />
                <Route exact path="/seller_dashboard/req-quotations" component={RequestQuotation} />
                <Route exact path="/seller_dashboard/answered-quotation" component={AnsweredQuotation} />
                <Route exact path="/seller_dashboard/sold-items" component={SoldItems} />
                <Route exact path="/seller_dashboard/customer" component={Customers} />
                <Route exact path="/seller_dashboard/profile" component={profileSeller} />
                <Route exact path="/seller_dashboard/Stats" component={Stats} />
                <Route exact path="/seller_dashboard/AnsweredQuotationTemplate" component={AnsweredQuotationTemplate} />
                <Route exact path="/seller_dashboard/QuotationForm" component={QuotationForm} />
                <Route exact path="/seller_dashboard/QuotationReqTemplate" component={QuotationReqTemplate} />
                <Route exact path="/seller_dashboard/SoldQuotation" component={SoldQuotation} />
                <Route exact path="/seller_dashboard/customerContact" component={customerContact} />




            </div>
        );
    }
}

export default Routes;