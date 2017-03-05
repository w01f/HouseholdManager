using System.Collections.Generic;
using System.Linq;
using HouseholdManager.Domain.Core.Entities;

namespace HouseholdManager.Domain.Core.Repositories
{
	public interface IRepository<TEntity> where TEntity : BaseEntity
	{
		IEnumerable<TEntity> GetAll();
		TEntity Get(long id);
		void Insert(TEntity entity);
		void Update(TEntity entity);
		void Delete(TEntity entity);
		void Remove(TEntity entity);
		void SaveChanges();
	}
}
