import Restaurant from '../model/Restaurant'

export default interface RestaurantRepo {
  getAll(): Promise<Restaurant[]>
}
