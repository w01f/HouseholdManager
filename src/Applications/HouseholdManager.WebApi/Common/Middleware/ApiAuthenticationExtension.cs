using System;
using HouseholdManager.WebApi.Common.Constants;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.IdentityModel.Tokens;

namespace HouseholdManager.WebApi.Common.Middleware
{
	static class ApiAuthenticationExtension
	{
		public static void UseApiAuthentication(this IApplicationBuilder app)
		{
			app.UseJwtBearerAuthentication(new JwtBearerOptions()
			{
				AuthenticationScheme = "Bearer",
				AutomaticAuthenticate = true,
				AutomaticChallenge = true,
				TokenValidationParameters = new TokenValidationParameters
				{
					IssuerSigningKey = AuthTokenOption.Key,
					ValidAudience = AuthTokenOption.Audience,
					ValidIssuer = AuthTokenOption.Issuer,
					ValidateIssuerSigningKey = true,
					ValidateLifetime = true,
					ClockSkew = TimeSpan.FromMinutes(0)
				},
				Events = new JwtBearerEvents
				{
					OnAuthenticationFailed = context =>
					{
						throw context.Exception;
					},
					OnChallenge = context =>
					{
						if (context.AuthenticateFailure != null)
							throw context.AuthenticateFailure;
						throw new SecurityTokenException(context.Error ?? "Authentification failed");
					}
				}
			});
		}
	}
}
