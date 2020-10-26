package io.umehara.ohirufinder.restaurant

interface RestaurantRepo {
    fun getAll(): List<Restaurant>
}
