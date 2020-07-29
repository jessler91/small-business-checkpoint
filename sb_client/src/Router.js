import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Homepage from './components/Homepage'
import About from './components/About'
import Login from './containers/Login'
import BusinesssListings from './containers/BusinessListings'
import BusinesssDetails from './containers/BusinessDetails'
import Add from './containers/Add'

import cookie from 'cookie'

// // Write checkAuth function here
// // Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    console.log('cookies:', cookies)
    return cookies["loggedIn"] ? true : false
}

// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return (
        
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/listings" component={BusinesssListings} />
            <ProtectedRoute path="/add" component={Add} />      
            <ProtectedRoute path="/details" component={BusinesssDetails} />
        </Switch>
    );
};

export default Router;

