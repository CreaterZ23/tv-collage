import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function UnAuthenticatedApp({ setCurrentUser }) {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path="/signup">
                    <Signup setCurrentUser={setCurrentUser} />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default UnAuthenticatedApp