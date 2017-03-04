using HouseholdManager.Domain.Core.Entities.Admin;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseholdManager.Infrastructure.Data.Mappers
{
	abstract class BaseEntityMap
	{
		protected BaseEntityMap(EntityTypeBuilder<User> entityBuilder)
		{
			entityBuilder.HasKey(t => t.Id);
			entityBuilder.Property(t => t.CreatedDate).IsRequired().HasColumnType("datetime");
			entityBuilder.Property(t => t.LastModifiedDate).HasColumnType("datetime");
		}
	}
}
