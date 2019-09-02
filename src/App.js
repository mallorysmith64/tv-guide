import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Cast from './components/Cast'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HomePage />
        <Cast />
      </BrowserRouter>
    )
  }
}

export default App
