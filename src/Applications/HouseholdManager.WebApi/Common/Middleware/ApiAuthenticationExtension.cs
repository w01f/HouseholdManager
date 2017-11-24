using System;
using HouseholdManager.WebApi.Common.Constants;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace HouseholdManager.WebApi.Common.Middleware
{
	static class ApiAuthenticationExtension
	{
		public static void AddJWTBearerAuthetication(this IServiceCollection services)
		{
			services
				.AddAuthentication(options =>
				{
					options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
					options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
				})
				.AddJwtBearer(options =>
				{
					options.TokenValidationParameters = new TokenValidationParameters
					{
						IssuerSigningKey = AuthTokenOption.Key,
						ValidAudience = AuthTokenOption.Audience,
						ValidIssuer = AuthTokenOption.Issuer,
						ValidateIssuerSigningKey = true,
						ValidateLifetime = true,
						ClockSkew = TimeSpan.FromMinutes(0)
					};
					options.Events = new JwtBearerEvents
					{
						OnAuthenticationFailed = context => throw context.Exception,
						OnChallenge = context =>
						{
							if (context.AuthenticateFailure != null)
								throw context.AuthenticateFailure;
							throw new SecurityTokenException(context.Error ?? "Authentification failed");
						}
					};
				});
		}
	}
}
