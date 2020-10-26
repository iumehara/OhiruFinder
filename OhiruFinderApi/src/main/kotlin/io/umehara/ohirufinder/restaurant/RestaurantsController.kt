package io.umehara.ohirufinder.restaurant

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("restaurants")
class RestaurantsController(val restaurantRepo: RestaurantRepo) {

    @GetMapping
    fun getAll(): List<Restaurant> {
        return restaurantRepo.getAll()
    }
}
