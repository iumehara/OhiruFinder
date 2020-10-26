package io.umehara.ohirufinder.restaurant

import org.springframework.stereotype.Repository

@Repository
class StubRestaurantRepo: RestaurantRepo {
    override fun getAll(): List<Restaurant> {
        return listOf(
                Restaurant("Restaurant A"),
                Restaurant("Restaurant B"),
                Restaurant("Restaurant B"),
                Restaurant("Restaurant B"),
                Restaurant("Restaurant C")
        )
    }
}
