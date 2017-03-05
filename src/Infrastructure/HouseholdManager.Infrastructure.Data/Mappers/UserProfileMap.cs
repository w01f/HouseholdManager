using HouseholdManager.Domain.Core.Entities.Admin;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseholdManager.Infrastructure.Data.Mappers
{
    class UserProfileMap : BaseEntityMap<UserProfile>
	{
		public UserProfileMap(EntityTypeBuilder<UserProfile> entityBuilder) : base(entityBuilder)
		{
			entityBuilder.ToTable("User_Profiles");
			entityBuilder.Property(t => t.FirstName).IsRequired();
			entityBuilder.Property(t => t.Birthday).IsRequired().HasColumnType("datetime");
		}
	}
}
