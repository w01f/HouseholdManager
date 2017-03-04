using HouseholdManager.Domain.Core.Entities.Admin;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseholdManager.Infrastructure.Data.Mappers
{
    class UserMap: BaseEntityMap
	{
		public UserMap(EntityTypeBuilder<User> entityBuilder) : base(entityBuilder)
		{
			entityBuilder.Property(t => t.FirstName).IsRequired();
			entityBuilder.Property(t => t.Birthday).IsRequired().HasColumnType("datetime");
			entityBuilder.Property(t => t.Email).IsRequired();
			entityBuilder.Property(t => t.Password).IsRequired();
		}
	}
}
