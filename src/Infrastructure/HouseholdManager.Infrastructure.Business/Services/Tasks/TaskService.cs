using System.Collections.Generic;
using HouseholdManager.Infrastructure.Business.Models.Tasks;

namespace HouseholdManager.Infrastructure.Business.Services.Tasks
{
	public class TaskService : ITaskService
	{
		public IEnumerable<TaskViewModel> GetTasks()
		{
			return new[]
			{
				new TaskViewModel {Name = "Bread", Price = 15.6m},
				new TaskViewModel {Name = "Butter", Price = 60m},
				new TaskViewModel {Name = "Potato", Price = 22.6m},
				new TaskViewModel {Name = "Cheese", Price = 310m}
			};
		}
	}
}
