import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './componet/Home'
import  Order  from './componet/Order'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/orders' element={<Order/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App