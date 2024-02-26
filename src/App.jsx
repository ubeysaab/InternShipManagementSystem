// - Import Third Party packages
import { useState } from 'react'
import { Link,Route,Routes,BrowserRouter} from 'react-router-dom'


// - Import files and Components 
import "./App.scss"
import Views from './Routes/Views'


function App() {

  return (
    <BrowserRouter className="app">
      <Views/>
    </BrowserRouter>
  )
}

export default App
