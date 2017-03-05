using System;
using HouseholdManager.Domain.Core.Repositories;
using HouseholdManager.Infrastructure.Business.Models.UserProfile;

namespace HouseholdManager.Infrastructure.Business.Services.UserProfile
{
	public class UserProfileService : IUserProfileService
	{
		private readonly IRepository<Domain.Core.Entities.Admin.UserProfile> _userRepository;

		public UserProfileService(IRepository<Domain.Core.Entities.Admin.UserProfile> userRepository)
		{
			_userRepository = userRepository;
		}

		public UserProfileViewModel GetByUserId(Int64 userId)
		{
			return _userRepository.Get(userId).ToModel();
		}
	}
}
