using HouseholdManager.Domain.Core.Entities.Admin;
using HouseholdManager.Infrastructure.Data.Mappers;
using Microsoft.EntityFrameworkCore;

namespace HouseholdManager.Infrastructure.Data
{
	public class DataContext : DbContext
	{
		public DbSet<User> Users { get; set; }
		public DbSet<UserProfile> UserProfiles { get; set; }

		public DataContext(DbContextOptions<DataContext> options) : base(options) { }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
			new UserMap(modelBuilder.Entity<User>());
			new UserProfileMap(modelBuilder.Entity<UserProfile>());
		}
	}
}
