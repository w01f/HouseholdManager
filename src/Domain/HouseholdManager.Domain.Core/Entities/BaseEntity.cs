using System;

namespace HouseholdManager.Domain.Core.Entities
{
	public abstract class BaseEntity
	{
		public virtual Int64 Id { get; set; }

		public virtual DateTime CreatedDate { get; set; }

		public virtual DateTime? LastModifiedDate { get; set; }
	}
}
