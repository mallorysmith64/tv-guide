import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'

class App extends Component {
  render() {
    return (
      <>
        <h1 className="page-title"> TV Shows You Should Be Watching</h1>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </>
    )
  }
}

export default App
