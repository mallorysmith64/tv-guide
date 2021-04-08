import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HomePage />
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App
