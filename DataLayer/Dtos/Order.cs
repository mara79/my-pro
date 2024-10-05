using Restaurant2.BusinessObjects.Dtos;


namespace BusinessObjects.Dtos
{
    public class Order
    {
        public int Id { get; set; }

        public List<Meal> SelectedMeals { get; set; } = new();

        public int MealCount => SelectedMeals?.Count ?? 0;
        public decimal TotalPrice => SelectedMeals.Sum(meal => meal.Price);
    }
}
