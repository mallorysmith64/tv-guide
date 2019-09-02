import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link className="cast-link" to="/Cast">
                Cast
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
