import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlatList from '../components/PlatList'
import RestaurantInfos from '../components/RestaurantInfos'
import { getRestaurantById } from '../services/Api'

function Restaurant () {
  const [restaurant, setRestaurant] = useState(null)
  const [loading, setLoading] = useState(false)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getRestaurantById(params.id)
      setRestaurant(data)
      setLoading(false)
    }
    getData()
  }, [])

  if (loading) {
    return (
      <h1>Chargement...</h1>
    )
  }

  return restaurant && (
    <div>
      <RestaurantInfos restaurant={restaurant} />
      <PlatList plats={restaurant.plats} />
    </div>
  )
}

export default Restaurant
