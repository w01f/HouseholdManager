using HouseholdManager.Infrastructure.Business.Services.UserProfile;
using HouseholdManager.WebApi.Common.Constants;
using HouseholdManager.WebApi.Models.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HouseholdManager.WebApi.Controllers
{
	[Route("api/[controller]")]
	public class UsersController
	{
		private readonly IUserProfileService _userProfileService;

		public UsersController(IUserProfileService userProfileService)
		{
			_userProfileService = userProfileService;
		}

		[HttpGet("{id}")]
		[Authorize(GlobalConstants.AuthenticationPolicyName)]
		public RequestResult Get(int id)
		{
			return new RequestResult
			{
				State = RequestState.Success,
				Data = _userProfileService.GetByUserId(id)
			};
		}
	}
}
