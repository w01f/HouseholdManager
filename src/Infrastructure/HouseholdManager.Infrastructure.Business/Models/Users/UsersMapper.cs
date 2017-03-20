namespace HouseholdManager.Infrastructure.Business.Models.Users
{
	static class UsersMapper
	{
		public static UserProfileViewModel ToProfileModel(this Domain.Core.Entities.Admin.UserProfile source, UserProfileViewModel targetModel = null)
		{
			if (source == null) return null;
			if (targetModel == null)
				targetModel = new UserProfileViewModel();

			targetModel.UserId = source.UserId;
			targetModel.FirstName = source.FirstName;
			targetModel.LastName = source.LastName;
			targetModel.Gender = source.Gender;
			targetModel.Birthday = source.Birthday;

			return targetModel;
		}

		public static UserProfileViewModel ToProfileModel(this Domain.Core.Entities.Admin.User source, UserProfileViewModel targetModel = null)
		{
			if (source == null) return null;
			if (targetModel == null)
				targetModel = new UserProfileViewModel();

			targetModel.UserId = source.Id;
			targetModel.Email = source.Email;

			return targetModel;
		}

		public static void ToProfileEntity(this UserProfileEditModel sourceModel, Domain.Core.Entities.Admin.UserProfile target)
		{
			target.FirstName = sourceModel.FirstName;
			target.LastName = sourceModel.LastName;
			target.Gender = sourceModel.Gender;
			target.Birthday = sourceModel.Birthday;
		}

		public static void ToUserEntity(this UserProfileEditModel sourceModel, Domain.Core.Entities.Admin.User target)
		{
			target.Password = sourceModel.PasswordOriginal;
		}
	}
}
