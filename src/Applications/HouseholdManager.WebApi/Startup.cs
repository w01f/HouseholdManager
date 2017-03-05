using HouseholdManager.Domain.Core.Entities.Admin;
using HouseholdManager.Domain.Core.Repositories;
using HouseholdManager.Infrastructure.Business.Services.Tasks;
using HouseholdManager.Infrastructure.Business.Services.UserLogin;
using HouseholdManager.Infrastructure.Business.Services.UserProfile;
using HouseholdManager.Infrastructure.Data;
using HouseholdManager.Infrastructure.Data.Repositories;
using HouseholdManager.WebApi.Common.Constants;
using HouseholdManager.WebApi.Common.Helpers;
using HouseholdManager.WebApi.Common.Middleware;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace HouseholdManager.WebApi
{
	public class Startup
	{
		public IConfigurationRoot Configuration { get; }

		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", true, true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", true)
				.AddEnvironmentVariables();
			Configuration = builder.Build();
		}

		public void ConfigureServices(IServiceCollection services)
		{
			var connectionString = Configuration.GetConnectionString("DefaultConnection");
			services.AddDbContext<DataContext>(options => options.UseMySql(connectionString));

			services.AddScoped(typeof(IRepository<>), typeof(CommonRepository<>));
			services.AddTransient<IUserLoginService, UserLoginService>();
			services.AddTransient<IUserProfileService, UserProfileService>();
			services.AddTransient<ITaskService, TaskService>();

			services.AddAuthorization(auth =>
			{
				auth.AddPolicy(GlobalConstants.AuthenticationPolicyName, new AuthorizationPolicyBuilder()
					.AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
					.RequireAuthenticatedUser()
					.Build());
			});

			services.AddCors(options =>
			{
				options.AddPolicy(GlobalConstants.CosrPolicyName,
					builder => builder
					.AllowAnyOrigin()
					.AllowCredentials()
					.AllowAnyHeader()
					.AllowAnyMethod()
					.Build());
			});

			services.AddMvc()
				.AddJsonOptions(options => options.SerializerSettings.ApplyDefaultSettings());
		}

		public void Configure(
			IApplicationBuilder app
			, IHostingEnvironment env
			, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(Configuration.GetSection("Logging"));
			loggerFactory.AddDebug();

			if (env.IsDevelopment())
				app.UseCors(GlobalConstants.CosrPolicyName);

			app.UseApiExceptionHandler();
			app.UseApiAuthentication();

			app.EnsureMigrationOfContext<DataContext>();

			app.UseMvc();
		}
	}
}
