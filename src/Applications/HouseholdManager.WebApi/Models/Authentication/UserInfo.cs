using System;
using HouseholdManager.Infrastructure.Business.Models.UserLogin;

namespace HouseholdManager.WebApi.Models.Authentication
{
	public class UserInfo
	{
		public Int64 Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }

		public static UserInfo FromUser(UserLoginModel user)
		{
			return new UserInfo
			{
				Id = user.Id,
				FirstName = user.FirstName,
				LastName = user.LastName,
				Email = user.Email,
			};
		}
	}
}
