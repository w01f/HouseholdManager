using System;

namespace HouseholdManager.Infrastructure.Business.Models.UserLogin
{
    public class UserLoginModel
    {
		public Int64 Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
	}
}
