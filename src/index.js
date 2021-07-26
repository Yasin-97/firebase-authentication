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
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import Dashboard from "./views/Dashboard";
import "assets/scss/black-dashboard-react.scss";
import PrivateRoute from "./privateRoute";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {AuthProvider} from './context/authContext'
import SignUp from "views/SignUp";
import SignIn from "views/SignIn";
import UpdateAccount from 'views/UpdateAccount'
import ForgotPassword from "views/ForgotPassword";



ReactDOM.render(
  <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={ SignIn } />
          <Route exact path="/signup" component={ SignUp } />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute exact path="/update-account" component={ UpdateAccount } />
          <PrivateRoute exact path="/admin/dashboard" component={ AdminLayout } />
          
        </Switch>
      </BrowserRouter>
      </AuthProvider>,
  document.getElementById("root")
);
