using HouseholdManager.WebApi.Common.Constants;
using HouseholdManager.WebApi.Common.Helpers;
using HouseholdManager.WebApi.Models.Common;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace HouseholdManager.WebApi.Common.Middleware
{
	static class ApiExceptionHandlerExtension
	{
		public static void UseApiExceptionHandler(this IApplicationBuilder app)
		{
			app.UseExceptionHandler(appBuilder =>
			{
				appBuilder.Use(async (context, next) =>
				{
					var errorFeature = context.Features[typeof(IExceptionHandlerFeature)] as IExceptionHandlerFeature;
					var error = errorFeature?.Error;
					RequestResult result = null;
					if (error != null)
					{
						context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
						context.Response.StatusCode = 200;
						if (error is SecurityTokenException)
						{
							result = new RequestResult
							{
								State = RequestState.NotAuth,
								Message = error.Message
							};
						}
						else
						{
							result = new RequestResult
							{
								State = RequestState.Failed,
								Message = error.Message
							};
						}
					}
					if (result != null)
						await context.Response.WriteAsync(JsonConvert.SerializeObject(result, JsonHelper.GetDefaultSettings()));
					else await next();
				});
			});
			app.UseCors(GlobalConstants.CosrPolicyName);
		}
	}
}
