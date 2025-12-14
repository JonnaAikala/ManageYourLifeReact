import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import taustaKuva from '/Leaves.jpg'
import './App.css'
import ToDolist from './ToDolist'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Router>
          <Navbar className="oma-navbar" variant="light" fixed="top" >
            <Nav >
              <Navbar.Text className="navbar-teksti"> MANAGE YOUR LIFE</Navbar.Text>
              <Nav.Link href='/todolist' className="nav-teksti">TO DO-lista</Nav.Link>
              <Nav.Link  className="nav-teksti">Shopping-lista</Nav.Link>

            </Nav>
          </Navbar>
          <img src={taustaKuva} className= "tausta" alt= "Lehdet" />
          <h1 className="paaotsikko">Manage your life</h1>
          <Routes>
            <Route path="/todolist" element={<ToDolist />}>
          </Route>

          </Routes>
        </Router>

        
        
      </div>


  )
}

export default App
