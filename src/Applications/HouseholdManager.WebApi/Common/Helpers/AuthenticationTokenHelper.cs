using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using HouseholdManager.Infrastructure.Business.Models.UserLogin;
using HouseholdManager.WebApi.Common.Constants;
using Microsoft.IdentityModel.Tokens;

namespace HouseholdManager.WebApi.Common.Helpers
{
	static class AuthenticationTokenHelper
	{
		public static string GenerateToken(UserLoginModel user, DateTime expires)
		{
			var handler = new JwtSecurityTokenHandler();

			var identity = new ClaimsIdentity(
				new GenericIdentity(user.Email, "TokenAuth"),
				new[] { new Claim("Id", user.UserId.ToString()) }
			);

			var securityToken = handler.CreateToken(new SecurityTokenDescriptor
			{
				Issuer = AuthTokenOption.Issuer,
				Audience = AuthTokenOption.Audience,
				SigningCredentials = AuthTokenOption.SigningCredentials,
				Subject = identity,
				Expires = expires
			});
			return handler.WriteToken(securityToken);
		}

		public static RSAParameters GenerateKey()
		{
			using (var key = new RSACryptoServiceProvider(2048))
			{
				return key.ExportParameters(true);
			}
		}
	}
}
