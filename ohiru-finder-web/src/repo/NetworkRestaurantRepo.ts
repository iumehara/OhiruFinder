import RestaurantRepo from './RestaurantRepo'
import Restaurant from '../model/Restaurant'

export default class NetworkRestaurantRepo implements RestaurantRepo {
  getAll(): Promise<Restaurant[]> {
    const apiUrl = process.env.REACT_APP_SERVER_URL
    return fetch(`${apiUrl}/restaurants`)
      .then(response => response.json())
  }
}