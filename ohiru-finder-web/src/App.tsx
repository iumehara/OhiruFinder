import React from 'react';
import './App.css';
import NetworkRestaurantRepo from './repo/NetworkRestaurantRepo'
import RestaurantList from './component/RestaurantList';

function App() {
  const restaurantRepo = new NetworkRestaurantRepo()

  return (
    <div className="App">
      <div>Ohiru Finder</div>
      <RestaurantList restaurantRepo={restaurantRepo}/>
    </div>
  );
}

export default App;
