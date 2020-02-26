import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Login from './components/login'
import Register from './components/register'
import Members from './components/members'
import {Nav} from 'react-bootstrap'

export default function App() {
  const Links = [
    {
      'name': 'Login',
      'to': '/'
    },
    {
      'name': 'Register',
      'to': '/register'
    },
    {
      'name': 'Members',
      'to': '/members'
    },
  ]
  return (
    <Router>
      <div>
        <Nav>
            {Links.map( (link) => {
              return (
                <Nav.Item>
                  <Nav.Link as={Link} to={link.to}>{link.name}</Nav.Link>
                </Nav.Item>
              )
            })}
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


