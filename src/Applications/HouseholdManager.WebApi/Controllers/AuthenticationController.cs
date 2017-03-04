using System;
using HouseholdManager.Infrastructure.Business.Services.UserLogin;
using HouseholdManager.WebApi.Common.Constants;
using HouseholdManager.WebApi.Common.Helpers;
using HouseholdManager.WebApi.Models.Authentication;
using HouseholdManager.WebApi.Models.Common;
using Microsoft.AspNetCore.Mvc;

namespace HouseholdManager.WebApi.Controllers
{
	[Route("api/[controller]")]
	public class AuthenticationController : Controller
    {
	    private readonly IUserLoginService _userLoginService;

		public AuthenticationController(IUserLoginService userLoginService)
		{
			_userLoginService = userLoginService;
		}

		[HttpPost("GetToken")]
		public RequestResult GetToken([FromBody]AuthenticationRequest request)
		{
			var existUser = _userLoginService.GetUserByEmailAndPassword(request.Email,request.Password);

			if (existUser == null)
				return new RequestResult
				{
					State = RequestState.Failed,
					Message = "Email or password is invalid"
				};

			var loginInfo = new LoginInfo();
			loginInfo.User = UserInfo.FromUser(existUser);
			var now = DateTime.Now;
			var expiresIn = now + AuthTokenOption.ExpiresSpan;
			loginInfo.Token = new TokenInfo
			{
				RequestAt = now,
				ExpiresIn = AuthTokenOption.ExpiresSpan.TotalSeconds,
				Type = AuthTokenOption.TokenType,
				Data = AuthenticationTokenHelper.GenerateToken(existUser, expiresIn)
			};
			return new RequestResult
			{
				State = RequestState.Success,
				Data = loginInfo
			};
		}
	}
}
