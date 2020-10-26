package io.umehara.ohirufinder.restaurant

import org.hamcrest.CoreMatchers.equalTo
import org.junit.jupiter.api.Test
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup

class RestaurantsControllerTests {
    @Test
    fun `getAll returns restaurants`() {
        val stubRepo = object: RestaurantRepo {
            override fun getAll(): List<Restaurant> {
                return listOf(
                        Restaurant("Restaurant A"),
                        Restaurant("Restaurant B"),
                        Restaurant("Restaurant C")
                )
            }
        }

        val controller = standaloneSetup(RestaurantsController(stubRepo)).build()

        controller.perform(get("/restaurants"))
                .andExpect(status().isOk)
                .andExpect(jsonPath("$.length()", equalTo(3)))
                .andExpect(jsonPath("$[0].name", equalTo("Restaurant A")))
                .andExpect(jsonPath("$[1].name", equalTo("Restaurant B")))
                .andExpect(jsonPath("$[2].name", equalTo("Restaurant C")))
    }
}