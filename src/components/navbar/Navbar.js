import React from 'react'
import {useNavigate} from "react-router-dom"
import "./navbar.css"

function Navbar() {

  const navigate = useNavigate()

  return (
    <nav className="navbar">
    <div className="navbar-content">
      <div onClick={() => navigate("/")} className="navbar-left">
        Home
      </div>
      <div className="navbar-center">
        <h1> AgentAnalytics.AI Assessment</h1>
      </div>
      <div className="navbar-right">
      </div>
    </div>
  </nav>
  )
}

export default Navbar