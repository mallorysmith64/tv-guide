import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Cast from './components/Cast'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
  }
}

export default App
