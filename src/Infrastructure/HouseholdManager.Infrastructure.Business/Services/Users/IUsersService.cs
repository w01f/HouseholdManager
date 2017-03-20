using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using HouseholdManager.Infrastructure.Business.Models.Users;

namespace HouseholdManager.Infrastructure.Business.Services.Users
{
	public interface IUsersService
	{
		UserProfileViewModel GetUserProfile(Int64 userid);
		IEnumerable<ValidationResult> EditUserProfile(UserProfileEditModel userProfileModel);
	}
}
