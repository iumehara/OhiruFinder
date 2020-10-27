package io.umehara.ohirufinder.restaurant

import org.springframework.stereotype.Repository

@Repository
class StubRestaurantRepo : RestaurantRepo {
    override fun getAll(): List<Restaurant> {
        return listOf(
                Restaurant("トラットリアヴィ"),
                Restaurant("麺処　巌流島"),
                Restaurant("あさりの食堂"),
                Restaurant("Taverna Racoco")
        )
    }
}
