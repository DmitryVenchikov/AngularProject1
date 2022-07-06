using Microsoft.AspNetCore.Mvc;

namespace AngularProject1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SeparateComponentController : ControllerBase
    {
        [HttpGet]
        public WeatherForecast Get(int id)
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = WeatherForecastController.Summaries[Random.Shared.Next(WeatherForecastController.Summaries.Length)]
            })
            .ToArray()[id];
        }
    }
}
