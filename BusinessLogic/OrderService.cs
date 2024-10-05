
using BusinessObjects.Dtos;
using DataBaseAccess;
using Restaurant2.BusinessObjects.Dtos;

namespace BusinessLogic
{
    public class OrderService
    {
        private readonly OrderRepository _orderRepository = new OrderRepository();

        //public Order CreateOrder(Order order)
        //{
        //    var newOrder = new Order()
        //    {
        //       Id = order.Id,
        //       MealCount = order.MealCount,
        //       SelectedMeals = order.SelectedMeals,
        //    };
        //    return newOrder;
        //}
        public void CreateOrder(Order order)
        {
            if (order.SelectedMeals == null || !order.SelectedMeals.Any())
            {
                throw new InvalidOperationException("No meals selected for the order."); 
            }

            _orderRepository.AddOrder(order);
        }

        public void EditOrder(Order order)
        {
            //var existingOrder = _orderRepository.GetOrderById(order.Id);
            //if (existingOrder != null)
            //{
            //    _orderRepository.UpdateOrder(order);
            //    return true;
            //}
            //return false;
            var existingOrder = _orderRepository.GetOrderById(order.Id);
            if (existingOrder == null)
            {
                throw new InvalidOperationException("Order not found."); 
            }

            existingOrder.SelectedMeals = order.SelectedMeals;
            _orderRepository.UpdateOrder(existingOrder);
        }

          public List<Order> GetFilteredOrders(Func<Order, bool> filter)
        {
            return _orderRepository.GetFilteredOrders(filter).ToList();
        }

        public Order GetOrderById(int id)
        {
            return _orderRepository.GetOrderById(id);
        }

        public bool DeleteOrder(int id)
        {
            var existingOrder = _orderRepository.GetOrderById(id);
            if (existingOrder != null)
            {
                _orderRepository.DeleteOrder(id);
                return true;
            }
            return false; 
        }
    }
}
