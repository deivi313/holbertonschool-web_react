import React from 'react'
import './App.css'
import logo from './assets/holberton-logo.jpg'

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} alt="holberton logo" />
        <h1 style={{ color: '#e1003c' }} >School dashboard</h1>
      </div >
      <div className="App-body">
        Login to access the full dashboard
      </div>
      <div className="App-footer">
        Copyright 2026 - holberton School
      </div>
    </>
  )
}

export default App