﻿using System;
using HouseholdManager.Domain.Core.Common.Enums;

namespace HouseholdManager.Infrastructure.Business.Models.Users
{
	public class UserProfileViewModel
	{
		public Int64 UserId { get; set; }
		public string Email { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public GenderType Gender { get; set; }
		public DateTime Birthday { get; set; }
	}
}
