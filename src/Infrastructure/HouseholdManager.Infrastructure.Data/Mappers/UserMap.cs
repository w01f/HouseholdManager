using HouseholdManager.Domain.Core.Entities.Admin;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseholdManager.Infrastructure.Data.Mappers
{
	class UserMap : BaseEntityMap<User>
	{
		public UserMap(EntityTypeBuilder<User> entityBuilder) : base(entityBuilder)
		{
			entityBuilder.Property(t => t.Email).IsRequired();
			entityBuilder.Property(t => t.Password).IsRequired();
			entityBuilder
				.HasOne(user => user.UserProfile)
				.WithOne(userProfile => userProfile.User)
				.HasForeignKey<UserProfile>(userProfile => userProfile.UserId);
		}
	}
}
