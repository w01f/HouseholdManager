using System;

namespace HouseholdManager.WebApi.Models.Authentication
{
	class TokenInfo
	{
		public DateTime RequestAt { get; set; }
		public double ExpiresIn { get; set; }
		public string Type { get; set; }
		public string Data { get; set; }
	}
}
