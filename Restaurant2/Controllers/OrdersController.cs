using BusinessLogic;
using Restaurant2.BusinessObjects.Dtos;
using Microsoft.AspNetCore.Mvc;
using BusinessObjects.Dtos;

[ApiController]
[Route("api/[controller]/[Action]")]
public class OrdersController : ControllerBase
{
    private readonly OrderService _orderService = new OrderService();

    //[HttpPost]
    //public IActionResult Create([FromBody] Order order)
    //{
    //    _orderService.CreateOrder(order);
    //    return Ok("Order created successfully");
    //}
    [HttpPost]
    public IActionResult Create([FromBody] Order order)
    {
        if (order.SelectedMeals == null || !order.SelectedMeals.Any())
        {
            return BadRequest("No meals selected for the order.");
        }

        _orderService.CreateOrder(order);
        return CreatedAtAction(nameof(GetById), new { id = order.Id }, order);
    }


    [HttpPut]
    public IActionResult Edit([FromBody] Order order)
    {
         _orderService.EditOrder(order);
        return Ok();
    }

    [HttpGet("filtered")]
    public IActionResult GetFiltered([FromQuery] decimal minPrice, [FromQuery] decimal maxPrice)
    {
        var orders = _orderService.GetFilteredOrders(o => o.MealCount >=  minPrice && o.MealCount <= maxPrice);

        return Ok(orders);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var order = _orderService.GetOrderById(id);
        return order != null ? Ok(order) : NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var result = _orderService.DeleteOrder(id);
        if (result)
        {
            return Ok("Order deleted successfully");
        }
        return NotFound("Order not found");
    }
}
