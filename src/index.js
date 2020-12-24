
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import GraphsLayout from "layouts/Graphs.jsx";
import GraphPhLayout from "layouts/GraphPh.jsx";
import HomeLayout from "layouts/HomeLayout.jsx";
import SupportLayout from "layouts/SupportLay.jsx";
import ManualLayout from "layouts/ManualLayout.jsx";

//import AuthUserLayout from "layouts/AuthUser.jsx";
 
import AuthUser from "layouts/AuthUser.jsx"




ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/graphs" render={props => <GraphsLayout {...props} />} />
      <Route path="/graphph" render={props => <GraphPhLayout {...props} />} />
      <Route path="/home" render={props => <HomeLayout {...props} />} />
      <Route path="/user" render={props => <AuthUser {...props} />} />
      <Route path="/suppo" render={props => <SupportLayout {...props} />} />
      <Route path="/manu" render={props => <ManualLayout {...props} />} />
      
      
      
      

      <Redirect from="/" to="/home/home2" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
