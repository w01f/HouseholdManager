using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace HouseholdManager.WebApi.Common.Middleware
{
	static class DatabaseMigrationExtension
	{
		public static void EnsureMigrationOfContext<T>(this IApplicationBuilder app) where T : DbContext
		{
			var context = app.ApplicationServices.GetService<T>();
			context.Database.Migrate();
		}
	}
}
