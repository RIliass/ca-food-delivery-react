import { useEffect, useState } from 'react'
import { getRestaurants } from '../services/Api'

function Restaurants () {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurants()
      setRestaurants(data)
    }
    getData()
  }, [])

  if (loading) {
    return (
      <h1>Chargement ...</h1>
    )
  }

  return (
    <div>
      <h1>RESTAURANT</h1>
      <pre>{JSON.stringify(restaurants, null, 2)}</pre>
    </div>
  )
}

export default Restaurants
