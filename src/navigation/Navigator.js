import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurant from '../pages/Restaurant'
import Restaurants from '../pages/Restaurants'
import Auth from '../pages/Auth'
import Counter from '../pages/Counter'

function Navigator () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='restaurants' element={<Restaurants />} />
      <Route path='restaurant/:id' element={<Restaurant />} />
      <Route path='auth' element={<Auth />} />
      <Route path='counter' element={<Counter />} />
    </Routes>
  )
}

export default Navigator
