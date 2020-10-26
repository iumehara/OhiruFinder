import React, {useEffect, useState} from 'react'
import RestaurantRepo from '../repo/RestaurantRepo'
import Restaurant from '../model/Restaurant'

type RestaurantListProps = {
  restaurantRepo: RestaurantRepo
}

export default function RestaurantList(props: RestaurantListProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    props.restaurantRepo.getAll()
      .then(restaurants => setRestaurants(restaurants))
  }, [props.restaurantRepo])

  return (
    <div className='RestaurantList'>
      {restaurants.map((restaurant, i) => {
        return <div key={i}>{restaurant.name}</div>
      })}
    </div>
  )
}