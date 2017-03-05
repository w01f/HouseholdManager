using System;
using HouseholdManager.Infrastructure.Business.Models.UserProfile;

namespace HouseholdManager.Infrastructure.Business.Services.UserProfile
{
	public interface IUserProfileService
	{
		UserProfileViewModel GetByUserId(Int64 userid);
	}
}
