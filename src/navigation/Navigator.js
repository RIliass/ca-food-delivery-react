import { Routes, Route } from 'react-router-dom'
import Restaurants from '../pages/Restaurants'
import Home from '../pages/Home'

function Navigator () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='restaurants' element={<Restaurants />} />
    </Routes>
  )
}

export default Navigator
