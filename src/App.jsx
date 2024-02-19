// - Import Third Party packages
import { useState } from 'react'
import { Link,Route,Routes,BrowserRouter} from 'react-router-dom'


// - Import files and Components 
import "./App.scss"
import Home from './Routes/Home'
import Register from './Routes/Register'
import Login from './Routes/Login'

function App() {

  return (
    <BrowserRouter className="app">
    
    <Routes className="container">
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
