using System;
using System.ComponentModel.DataAnnotations;
using HouseholdManager.Domain.Core.Common.Enums;

namespace HouseholdManager.Infrastructure.Business.Models.Users
{
	public class UserProfileEditModel
	{
		[Required]
		public Int64 UserId { get; set; }

		[Required]
		[Display(Name = "First Name")]
		public string FirstName { get; set; }

		[Display(Name = "Last Name")]
		public string LastName { get; set; }

		[Display(Name = "Gender")]
		public GenderType Gender { get; set; }

		[Display(Name = "Birthday")]
		public DateTime Birthday { get; set; }

		[Display(Name = "Password")]
		public string PasswordOriginal { get; set; }

		[Compare("PasswordOriginal")]
		[Display(Name = "Password confirmation")]
		public string PasswordConfirm { get; set; }

		public bool PasswordChanged => !String.IsNullOrEmpty(PasswordOriginal);
	}
}
