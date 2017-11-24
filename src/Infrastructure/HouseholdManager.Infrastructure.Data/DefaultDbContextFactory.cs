using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HouseholdManager.Infrastructure.Data
{
	public class DefaultDbContextFactory : IDesignTimeDbContextFactory<DataContext>
	{
		public DataContext CreateDbContext(String[] args)
		{
			var builder = new DbContextOptionsBuilder<DataContext>();
			builder.UseMySql("server=localhost;userid=root;pwd=root;port=3306;database=household_manager;sslmode=none;",
				optionsBuilder => optionsBuilder.MigrationsHistoryTable(HistoryRepository.DefaultTableName)
			);
			return new DataContext(builder.Options);
		}
	}
}
