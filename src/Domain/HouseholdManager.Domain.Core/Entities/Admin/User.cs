using System;
using System.ComponentModel.DataAnnotations;
using HouseholdManager.Domain.Core.Common.Enums;

namespace HouseholdManager.Domain.Core.Entities.Admin
{
	public class User : BaseEntity
	{
		public virtual string FirstName { get; set; }

		public virtual string LastName { get; set; }

		public virtual GenderType Gender { get; set; }

		public virtual DateTime Birthday { get; set; }

		public virtual string Email { get; set; }

		public virtual string Password { get; set; }
	}
}
