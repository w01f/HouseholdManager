using System.Collections.Generic;
using HouseholdManager.Infrastructure.Business.Models.Tasks;

namespace HouseholdManager.Infrastructure.Business.Services.Tasks
{
	public interface ITaskService
	{
		IEnumerable<TaskViewModel> GetTasks();
	}
}
