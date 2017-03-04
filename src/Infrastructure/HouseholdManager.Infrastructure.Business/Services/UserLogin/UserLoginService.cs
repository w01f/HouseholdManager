using System.Linq;
using HouseholdManager.Domain.Core.Entities.Admin;
using HouseholdManager.Domain.Core.Repositories;
using HouseholdManager.Infrastructure.Business.Models.UserLogin;

namespace HouseholdManager.Infrastructure.Business.Services.UserLogin
{
	public class UserLoginService : IUserLoginService
	{
		private readonly IRepository<User> _userRepository;

		public UserLoginService(IRepository<User> userRepository)
		{
			_userRepository = userRepository;
		}

		public UserLoginModel GetUserByEmailAndPassword(string email, string password)
		{
			return _userRepository.GetAll()
				.SingleOrDefault(user => user.Email == email && 
					user.Password == password)
				.ToModel();
		}
	}

}
