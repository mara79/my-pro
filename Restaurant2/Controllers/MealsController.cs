using Microsoft.AspNetCore.Mvc;
using Restaurant2.BusinessObjects.Dtos;
using BusinessLogic;
namespace Restaurant2.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class MealsController : Controller
    {
        private readonly MealService _mealService = new MealService();

        [HttpPost]
        public IActionResult CreateMeal([FromBody] MealForDisplay meal)
        {
            var createdMeal = _mealService.CreateMeal(meal);
            return CreatedAtAction(nameof(GetById), new { id = createdMeal.Id }, createdMeal);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var meal = _mealService.GetMealById(id);
            return meal != null ? Ok(meal) : NotFound();
        }

        [HttpGet]
        public IEnumerable<Meal> GetMeals()
        {

            return _mealService.GetMeals();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateMeal(int id, [FromBody] MealForDisplay updatedMeal)
        {
            var meal = _mealService.UpdateMeal(id, updatedMeal);
            return meal != null ? Ok(meal) : NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _mealService.DeleteMeal(id);
            return Ok();
        }
        [HttpGet]
        public IActionResult GetFilteredMeals(double minPrice, double maxPrice)
        {
            var filteredMeals = _mealService.GetFilteredMeals(m => m.Price >= (decimal)minPrice && m.Price <= (decimal)maxPrice);
            return Ok(filteredMeals);
        }

    }
}
