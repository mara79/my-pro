using Restaurant2.BusinessObjects.Dtos;

namespace DataBaseAccess
{
    public class MealRepository
    {
        private static readonly List<Meal> _meals = new();

        public void AddMeal(Meal meal)
        {
            _meals.Add(meal);
        }
        public Meal GetMealById(int id)
        {
            var meal = _meals.FirstOrDefault(m => m.Id == id);
            return meal;
        }
        public IEnumerable<Meal> GetAllMeals()
        {
            return _meals.AsEnumerable();
        }
        public void DeleteMeal(int id)
        {
            var meal = _meals.FirstOrDefault(m => m.Id == id);
            if (meal != null)
            {
                _meals.Remove(meal);
            }

        }
        public IEnumerable<Meal> GetFilteredMeals(Func<Meal, bool> filter)
        {
            return _meals.Where(filter);
        }
    }
}
