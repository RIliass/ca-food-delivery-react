import RestaurantAddress from './RestaurantAddress'
import './styles/RestaurantInfosStyle.css'

function RestaurantInfos (props) {
  const { restaurant } = props
  return (
    <div className='infos-container'>
      <div className='col'>
        <h1>{restaurant.title}</h1>
        <img className='card-img' src={`${process.env.REACT_APP_API_URL}${restaurant.photos[0].url}`} />
        <p>{restaurant.description}</p>
      </div>
      <div className='col'>
        <RestaurantAddress adresse={restaurant.adresse} />
      </div>
    </div>
  )
}

export default RestaurantInfos
