using HouseholdManager.Domain.Core.Entities.Admin;

namespace HouseholdManager.Infrastructure.Business.Models.UserLogin
{
	static class UserLoginMapper
	{
		public static UserLoginModel ToModel(this User source)
		{
			return new UserLoginModel
			{
				Id = source.Id,
				FirstName = source.FirstName,
				LastName = source.LastName,
				Email = source.Email,
			};
		}
	}
}
