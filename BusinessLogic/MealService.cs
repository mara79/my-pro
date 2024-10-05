//using Restaurant2.DataBaseAccess;
using Restaurant2.BusinessObjects.Dtos;
using DataBaseAccess;

namespace BusinessLogic
{
    public class MealService
    {
        private readonly MealRepository _mealRepository = new MealRepository();
        private static int _nextId = 1;
        public Meal CreateMeal(MealForDisplay mealForDisplay)
        {
            var newMeal = new Meal()
            {
                Id = _nextId++,
                Name = mealForDisplay.Name,
                Weight = mealForDisplay.Weight,
                Description = mealForDisplay.Description,
                Price = mealForDisplay.Price,
                Calories = mealForDisplay.Calories,
                MealCode = mealForDisplay.MealCode,
            };
            _mealRepository.AddMeal(newMeal);
            return newMeal;
        }
        public Meal GetMealById(int id)
        {
            return _mealRepository.GetMealById(id);
        }
        public IEnumerable<Meal> GetMeals()
        {
            return _mealRepository.GetAllMeals();
        }
        public Meal UpdateMeal(int id, MealForDisplay updatedMealData)
        {
            var meal = _mealRepository.GetMealById(id);
            if (meal != null)
            {
                meal.Name = updatedMealData.Name;
                meal.Weight = updatedMealData.Weight;
                meal.Description = updatedMealData.Description;
                meal.Price = updatedMealData.Price;
                meal.Calories = updatedMealData.Calories;
                meal.MealCode = updatedMealData.MealCode;
            }
            return meal; 
        }

        public void DeleteMeal(int id)
        {
            _mealRepository.DeleteMeal(id);
        }
        public IEnumerable<Meal> GetFilteredMeals(Func<Meal, bool> filter)
        {
            return _mealRepository.GetAllMeals().Where(filter);
        }

    }
}
