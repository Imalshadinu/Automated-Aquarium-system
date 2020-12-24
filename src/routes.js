
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Temperature from "views/Temperature.jsx";
import PhVal from "views/PhVal.jsx";
import Home from "views/examples/Home.jsx";
import Why from "views/examples/Why.jsx"
import Support from "views/examples/Support.jsx"
import Manual from "views/examples/Manual.jsx"


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
