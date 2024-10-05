﻿
namespace Restaurant2.BusinessObjects.Dtos
{
    public class MealForDisplay
    {

        public string Name { get; set; }
        public double Weight { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Calories { get; set; }
        public string MealCode { get; set; }

    }
}
