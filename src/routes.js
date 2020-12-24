/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
//import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Temperature from "views/Temperature.jsx";
import PhVal from "views/PhVal.jsx";
import Home from "views/examples/Home.jsx";
import Why from "views/examples/Why.jsx"
import Support from "views/examples/Support.jsx"
import Manual from "views/examples/Manual.jsx"

//import AuthUser from "layouts/AuthUser.jsx"
//import Tables from "views/examples/Tables.jsx";
//import Icons from "views/examples/Icons.jsx";

var routes = [
  

  {
    path: "/temperature",
    name: "Temperature",
    icon: "ni ni-tv-2 text-primary",
    component: Temperature,
    layout: "/graphs"
  },

  {
    path: "/phval",
    name: "PhLevel",
    icon: "ni ni-tv-2 text-primary",
    component: PhVal,
    layout: "/graphph"
  },
  
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
    

  },

  {
    path: "/why",
    name: "Why",
    icon: "ni ni-single-02 text-yellow",
    component: Why,
    layout: "/home"
    

  },

  {
    path: "/manual",
    name: "Manual",
    icon: "ni ni-single-02 text-yellow",
    component: Manual,
    layout: "/manu"
    

  },

  {
    path: "/support",
    name: "Support",
    icon: "ni ni-single-02 text-yellow",
    component: Support,
    layout: "/suppo"
    

  },
  
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },

  {
    path: "/home2",
    name: "Home",
    icon: "ni ni-key-25 text-info",
    component: Home,
    layout: "/home"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];


export default routes;
