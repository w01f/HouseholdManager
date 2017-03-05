using HouseholdManager.Domain.Core.Entities.Admin;

namespace HouseholdManager.Infrastructure.Business.Models.UserLogin
{
	static class UserLoginMapper
	{
		public static UserLoginModel ToModel(this User source)
		{
			if (source == null) return null;
			return new UserLoginModel
			{
				UserId = source.Id,
				Email = source.Email
			};
		}
	}
}
