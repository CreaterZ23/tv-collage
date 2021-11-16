import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Home from './Home'
import AddShow from './AddShow'
import CollagePage from './single-show-page/CollagePage'

function AuthenticatedApp({ currentUser, rerender, setRerender }) {
    let history = useHistory()
    
    
    
    const handleLogout = () => {
        fetch(`/logout`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(()=>{
                // setCurrentUser(null)
                history.push('/');
                setRerender(!rerender)
                console.log('hey now')
            })
    }

    return (
        <div>
            <Header/>
            <Navbar handleLogout={handleLogout}/>
            <body>

            <Switch>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route exact path="/addshow">
                    <AddShow currentUser={currentUser}/>
                </Route>
                <Route path='/shows/:id'>
                    <CollagePage />
                </Route>
            </Switch>
            </body>
        </div>
    )
}

export default AuthenticatedApp