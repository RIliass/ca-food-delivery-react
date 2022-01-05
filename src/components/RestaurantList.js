import RestaurantListItem from './RestaurantListItem'

import './styles/RestaurantListStyle.css'

function RestaurantList (props) {
  const { restaurants } = props
  // = const restaurants = props.restaurants
  return (
    <div className='list-container'>
      {
        restaurants.map(restaurant => {
          return (
            <RestaurantListItem key={restaurant._id} restaurant={restaurant} />
          )
        })
      }
    </div>
  )
}

export default RestaurantList
