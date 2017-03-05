using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using HouseholdManager.Infrastructure.Data;
using HouseholdManager.Domain.Core.Common.Enums;

namespace HouseholdManager.Infrastructure.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20170305184928_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752");

            modelBuilder.Entity("HouseholdManager.Domain.Core.Entities.Admin.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime");

                    b.Property<string>("Email")
                        .IsRequired();

                    b.Property<DateTime?>("LastModifiedDate")
                        .HasColumnType("datetime");

                    b.Property<string>("Password")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("HouseholdManager.Domain.Core.Entities.Admin.UserProfile", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Birthday")
                        .HasColumnType("datetime");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime");

                    b.Property<string>("FirstName")
                        .IsRequired();

                    b.Property<int>("Gender");

                    b.Property<DateTime?>("LastModifiedDate")
                        .HasColumnType("datetime");

                    b.Property<string>("LastName");

                    b.Property<long>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("User_Profiles");
                });

            modelBuilder.Entity("HouseholdManager.Domain.Core.Entities.Admin.UserProfile", b =>
                {
                    b.HasOne("HouseholdManager.Domain.Core.Entities.Admin.User", "User")
                        .WithOne("UserProfile")
                        .HasForeignKey("HouseholdManager.Domain.Core.Entities.Admin.UserProfile", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
