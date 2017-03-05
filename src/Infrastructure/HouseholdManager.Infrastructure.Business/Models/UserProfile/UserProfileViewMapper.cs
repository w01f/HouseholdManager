namespace HouseholdManager.Infrastructure.Business.Models.UserProfile
{
	static class UserProfileViewMapper
	{
		public static UserProfileViewModel ToModel(this Domain.Core.Entities.Admin.UserProfile source)
		{
			if (source == null) return null;
			return new UserProfileViewModel
			{
				UserId = source.UserId,
				FirstName = source.FirstName,
				LastName = source.LastName,
				Gender = source.Gender,
				Birthday = source.Birthday
			};
		}
	}
}
