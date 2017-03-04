using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HouseholdManager.Infrastructure.Data
{
	public class DefaultDbContextFactory : IDbContextFactory<DataContext>
	{
		public DataContext Create(DbContextFactoryOptions options)
		{
			var builder = new DbContextOptionsBuilder<DataContext>();
			builder.UseMySql("server=localhost;userid=root;pwd=root;port=3306;database=household_manager;sslmode=none;",
				optionsBuilder => optionsBuilder.MigrationsHistoryTable(HistoryRepository.DefaultTableName)
				);
			return new DataContext(builder.Options);
		}
	}
}
