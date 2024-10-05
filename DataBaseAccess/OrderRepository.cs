
using BusinessObjects.Dtos;
using Restaurant2.BusinessObjects.Dtos;

namespace DataBaseAccess
{
    public class OrderRepository
    {
        private static readonly List<Order> _orders = new();


        public void AddOrder(Order order)
        {

            _orders.Add(order);

        }


        public Order UpdateOrder(Order order)
        {
            var existingOrder = _orders.FirstOrDefault(o => o.Id == order.Id);
            if (existingOrder != null)
            {
                existingOrder.SelectedMeals = order.SelectedMeals;

            }
            return existingOrder;
        }

        public Order GetOrderById(int id)
        {
            var order = _orders.FirstOrDefault(o => o.Id == id);
            return order;
        }

        public IEnumerable<Order> GetAllOrders()
        {
            return _orders;
        }

        public void DeleteOrder(int id)
        {
            var order = _orders.FirstOrDefault(o => o.Id == id);
            if (order != null)
            {
                _orders.Remove(order);
            }
           
        }
        public IEnumerable<Order> GetFilteredOrders(Func<Order, bool> filter)
        {
            return _orders.Where(filter);
        }
    }
}
