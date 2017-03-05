using System;
using HouseholdManager.Domain.Core.Common.Enums;

namespace HouseholdManager.Domain.Core.Entities.Admin
{
	public class UserProfile : BaseEntity
	{
		public virtual string FirstName { get; set; }

		public virtual string LastName { get; set; }

		public virtual GenderType Gender { get; set; }

		public virtual DateTime Birthday { get; set; }

		public virtual Int64 UserId { get; set; }

		public virtual User User { get; set; }
	}
}
