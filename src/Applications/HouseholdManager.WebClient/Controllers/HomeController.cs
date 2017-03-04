using HouseholdManager.WebClient.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace HouseholdManager.WebClient.Controllers
{
	public class HomeController : Controller
	{
		private readonly ServicesConnectionSettings _servicesConnectionSettings;

		public HomeController(IOptions<ServicesConnectionSettings> optionsAccessor)
		{
			_servicesConnectionSettings = optionsAccessor.Value;
		}

		public IActionResult Index()
		{
			return View(_servicesConnectionSettings);
		}
	}
}
