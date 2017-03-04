using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HouseholdManager.Infrastructure.Data.Migrations
{
	public partial class Initial : Migration
	{
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.CreateTable(
				name: "Users",
				columns: table => new
				{
					Id = table.Column<long>(nullable: false)
						.Annotation("MySql:ValueGeneratedOnAdd", true),
					Birthday = table.Column<DateTime>(type: "datetime", nullable: false),
					CreatedDate = table.Column<DateTime>(type: "datetime", nullable: false),
					Email = table.Column<string>(nullable: false),
					FirstName = table.Column<string>(nullable: false),
					Gender = table.Column<int>(nullable: false),
					LastModifiedDate = table.Column<DateTime>(type: "datetime", nullable: true),
					LastName = table.Column<string>(nullable: true),
					Password = table.Column<string>(nullable: false)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_Users", x => x.Id);
				});
			migrationBuilder.Sql("insert into users (FirstName, LastName, Birthday, Email, Password, CreatedDate) values ('Alexey','Krupnov','1980-02-17 22:10:00','akrupnov@yandex.ru','dude', '2017-02-28 15:00:00')");
		}

		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropTable(
				name: "Users");
		}
	}
}
