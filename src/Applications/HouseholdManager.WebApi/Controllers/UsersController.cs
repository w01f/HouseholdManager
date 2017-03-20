using System.Linq;
using HouseholdManager.Infrastructure.Business.Models.Users;
using HouseholdManager.Infrastructure.Business.Services.Users;
using HouseholdManager.WebApi.Common.Constants;
using HouseholdManager.WebApi.Models.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HouseholdManager.WebApi.Controllers
{
	[Route("api/[controller]")]
	public class UsersController
	{
		private readonly IUsersService _usersService;

		public UsersController(IUsersService usersService)
		{
			_usersService = usersService;
		}

		[HttpGet("{id}")]
		[Authorize(GlobalConstants.AuthenticationPolicyName)]
		public RequestResult Get(int id)
		{
			return new RequestResult
			{
				State = RequestState.Success,
				Data = _usersService.GetUserProfile(id)
			};
		}

		// POST api/values
		[HttpPost("Edit")]
		[Authorize(GlobalConstants.AuthenticationPolicyName)]
		public RequestResult Edit([FromBody]UserProfileEditModel userProfile)
		{
			var validationResults = _usersService.EditUserProfile(userProfile);
			if (!validationResults.Any())
				return new RequestResult
				{
					State = RequestState.Success
				};
			return new RequestResult
			{
				State = RequestState.Failed,
				Data = validationResults
			};
		}
	}
}
