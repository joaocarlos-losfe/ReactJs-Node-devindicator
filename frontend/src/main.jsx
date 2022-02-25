import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Test from './teste'

ReactDOM.render(
  <React.StrictMode>
    <Test/>
    <App />
    <App />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
