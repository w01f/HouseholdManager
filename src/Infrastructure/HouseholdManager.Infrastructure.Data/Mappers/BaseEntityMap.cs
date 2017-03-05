using HouseholdManager.Domain.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseholdManager.Infrastructure.Data.Mappers
{
	abstract class BaseEntityMap<TEntity> where TEntity : BaseEntity
	{
		protected BaseEntityMap(EntityTypeBuilder<TEntity> entityBuilder)
		{
			entityBuilder.HasKey(t => t.Id);
			entityBuilder.Property(t => t.CreatedDate).IsRequired().HasColumnType("datetime");
			entityBuilder.Property(t => t.LastModifiedDate).HasColumnType("datetime");
		}
	}
}
