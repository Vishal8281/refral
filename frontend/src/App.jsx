import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Refral from "./components/refral"
import Buy  from './components/buy'
import Update from './components/update'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element={<Login/>} />
      <Route  path='home' element={<Home/>} />
      
      <Route path='signup' element={<Signup/>} />
      <Route path='Refral' element={<Refral/>} />
      <Route path='Buy' element={<Buy/>} />
      <Route path='update' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
