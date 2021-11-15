// client/src/components/App.js
import './App.css';
import { useState, useEffect } from "react";
// import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import AuthenticatedApp from './accessed-app/AuthenticatedApp';
import UnAuthenticatedApp from './login-folder/UnAuthenticatedApp'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    fetch('/auth', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [rerender])

  if (!authChecked) { return <div></div> }
  return (
    <div className="container">
      {currentUser ? (
        <AuthenticatedApp
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          rerender={rerender}
          setRerender={setRerender}
        />
      ) : (
        <UnAuthenticatedApp
          setCurrentUser={setCurrentUser}
        />
      )
      }
    </div>
  );
}

export default App;
