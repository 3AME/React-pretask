import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
// import history from "./history";
// import UserDetails from "./UsersCard/UserDetails"
import UserDetails from "./UserDetails";

class Routes extends Component {
    render(){
        return(
            <Router>
                <Route path="/UserDetails" component={UserDetails}></Route>
            </Router>
        )
    }
}

export default Routes;