using System;

namespace HouseholdManager.WebApi.Models.Authentication
{
	class LoginInfo
	{
		public Int64 UserId { get; set; }
		public TokenInfo Token { get; set; }
	}
}
