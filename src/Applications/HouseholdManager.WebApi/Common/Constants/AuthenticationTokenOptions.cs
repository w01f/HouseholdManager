using System;
using HouseholdManager.WebApi.Common.Helpers;
using Microsoft.IdentityModel.Tokens;

namespace HouseholdManager.WebApi.Common.Constants
{
	class AuthTokenOption
	{
		public static string Audience { get; } = "Everyday manager users";
		public static string Issuer { get; } = "VolgaTeam";
		public static RsaSecurityKey Key { get; } = new RsaSecurityKey(AuthenticationTokenHelper.GenerateKey());
		public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.RsaSha256Signature);
		public static TimeSpan ExpiresSpan { get; } = TimeSpan.FromMinutes(40);
		public static string TokenType { get; } = "Bearer";
	}
}
