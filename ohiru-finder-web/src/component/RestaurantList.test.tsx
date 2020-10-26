import React from 'react'
import {render, waitForElement} from '@testing-library/react'
import RestaurantList from './RestaurantList'
import RestaurantRepo from '../repo/RestaurantRepo'
import Restaurant from '../model/Restaurant'

describe('RestaurantList', () => {
  test('renders learn react link', async () => {
    const stubRepo: RestaurantRepo = {
      getAll(): Promise<Restaurant[]> {
        return Promise.resolve([
          new Restaurant('Restaurant A'),
          new Restaurant('Restaurant B'),
          new Restaurant('Restaurant C'),
          new Restaurant('Restaurant D')
        ])
      }
    }

    const restaurantList = render(<RestaurantList restaurantRepo={stubRepo}/>)
    await waitForElement(() => restaurantList.queryByText('Restaurant A'))

    expect(restaurantList.queryByText('Restaurant A')).toBeInTheDocument()
    expect(restaurantList.queryByText('Restaurant B')).toBeInTheDocument()
    expect(restaurantList.queryByText('Restaurant C')).toBeInTheDocument()
    expect(restaurantList.queryByText('Restaurant D')).toBeInTheDocument()
  })
})
