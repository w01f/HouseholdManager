using HouseholdManager.Infrastructure.Business.Models.UserLogin;

namespace HouseholdManager.Infrastructure.Business.Services.UserLogin
{
	public interface IUserLoginService
	{
		UserLoginModel GetUserByEmailAndPassword(string email, string password);
	}
}
