using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HouseholdManager.Infrastructure.Data.Migrations
{
	public partial class Initial : Migration
	{
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.CreateTable(
				"Users",
				table => new
				{
					Id = table.Column<long>()
						.Annotation("MySql:ValueGeneratedOnAdd", true),
					CreatedDate = table.Column<DateTime>("datetime"),
					Email = table.Column<string>(),
					LastModifiedDate = table.Column<DateTime>("datetime", nullable: true),
					Password = table.Column<string>()
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_Users", x => x.Id);
				});

			migrationBuilder.CreateTable(
				"User_Profiles",
				table => new
				{
					Id = table.Column<long>()
						.Annotation("MySql:ValueGeneratedOnAdd", true),
					Birthday = table.Column<DateTime>("datetime"),
					CreatedDate = table.Column<DateTime>("datetime"),
					FirstName = table.Column<string>(),
					Gender = table.Column<int>(),
					LastModifiedDate = table.Column<DateTime>("datetime", nullable: true),
					LastName = table.Column<string>(nullable: true),
					UserId = table.Column<long>()
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_User_Profiles", x => x.Id);
					table.ForeignKey(
						"FK_User_Profiles_Users_UserId",
						x => x.UserId,
						"Users",
						"Id",
						onDelete: ReferentialAction.Cascade);
				});

			migrationBuilder.CreateIndex(
				"IX_User_Profiles_UserId",
				"User_Profiles",
				"UserId",
				unique: true);

			migrationBuilder.Sql("insert into users (Id, Email, Password, CreatedDate) values (1, 'akrupnov@yandex.ru','dude', '2017-02-28 15:00:00')");
			migrationBuilder.Sql("insert into user_profiles (FirstName, LastName, Birthday, CreatedDate, UserId) values ('Alexey','Krupnov','1980-02-17 22:10:00', '2017-02-28 15:00:00', 1)");
		}

		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropTable(
				"User_Profiles");

			migrationBuilder.DropTable(
				"Users");
		}
	}
}
