using System.Linq;
using HouseholdManager.Infrastructure.Business.Services.Tasks;
using HouseholdManager.WebApi.Common.Constants;
using HouseholdManager.WebApi.Models.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HouseholdManager.WebApi.Controllers
{
	[Route("api/[controller]")]
	public class TasksController
	{
		private readonly ITaskService _taskService;

		public TasksController(ITaskService taskService)
		{
			_taskService = taskService;
		}

		[HttpGet]
		[Authorize(GlobalConstants.AuthenticationPolicyName)]
		public RequestResult Get()
		{
			return new RequestResult
			{
				State = RequestState.Success,
				Data = _taskService.GetTasks().ToArray()
			};
		}
	}
}
