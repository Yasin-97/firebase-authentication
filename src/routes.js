/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "Icons",
    icon: "tim-icons icon-atom",
  },
  {
    name: "Map",
    icon: "tim-icons icon-pin",
  },
  {
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
  },
  {
    name: "User Profile",
    icon: "tim-icons icon-single-02",
  },
  {
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
  },
  {
    name: "Typography",
    icon: "tim-icons icon-align-center",
  },
  {
    name: "RTL Support",
    icon: "tim-icons icon-world"
  },
];
export default routes;
