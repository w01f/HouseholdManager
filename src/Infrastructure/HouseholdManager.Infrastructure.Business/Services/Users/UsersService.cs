using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using HouseholdManager.Domain.Core.Entities.Admin;
using HouseholdManager.Domain.Core.Repositories;
using HouseholdManager.Infrastructure.Business.Models.Users;

namespace HouseholdManager.Infrastructure.Business.Services.Users
{
	public class UsersService : IUsersService
	{
		private readonly IRepository<UserProfile> _userProfileRepository;
		private readonly IRepository<User> _userRepository;

		public UsersService(
			IRepository<UserProfile> userProfileRepository,
			IRepository<User> userRepository)
		{
			_userProfileRepository = userProfileRepository;
			_userRepository = userRepository;
		}

		public UserProfileViewModel GetUserProfile(Int64 userId)
		{
			var userProfile = _userProfileRepository.Get(userId).ToProfileModel();
			_userRepository.Get(userId).ToProfileModel(userProfile);
			return userProfile;
		}

		public IEnumerable<ValidationResult> EditUserProfile(UserProfileEditModel userProfileModel)
		{
			var validationResults = ValidateUserProfile(userProfileModel);

			if (!validationResults.Any())
			{
				var userProfile = _userProfileRepository.Get(userProfileModel.UserId);
				var user = _userRepository.Get(userProfileModel.UserId);

				if (userProfileModel.PasswordChanged && String.Equals(user.Password, userProfileModel.PasswordOriginal))
					validationResults.Add(new ValidationResult("New password is match with one of old"));
				else
				{
					userProfileModel.ToProfileEntity(userProfile);
					if (userProfileModel.PasswordChanged)
					{
						userProfileModel.ToUserEntity(user);
						_userRepository.Update(user);
					}

					_userProfileRepository.Update(userProfile);
				}
			}
			return validationResults;
		}

		private IList<ValidationResult> ValidateUserProfile(UserProfileEditModel target)
		{
			var validationContext = new ValidationContext(target, null, null);
			var validationResults = new List<ValidationResult>();

			Validator.TryValidateObject(target, validationContext, validationResults, true);

			return validationResults;
		}
	}
}
