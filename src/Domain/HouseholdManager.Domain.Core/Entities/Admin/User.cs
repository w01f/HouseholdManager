namespace HouseholdManager.Domain.Core.Entities.Admin
{
	public class User : BaseEntity
	{
		public virtual string Email { get; set; }

		public virtual string Password { get; set; }

		public virtual UserProfile UserProfile { get; set; }
	}
}
