using System;
using System.Collections.Generic;
using System.Linq;
using HouseholdManager.Domain.Core.Entities;
using HouseholdManager.Domain.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace HouseholdManager.Infrastructure.Data.Repositories
{
	public class CommonRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
	{
		protected readonly DataContext _context;
		protected readonly DbSet<TEntity> _entities;

		public CommonRepository(DataContext context)
		{
			_context = context;
			_entities = context.Set<TEntity>();
		}

		public virtual IEnumerable<TEntity> GetAll()
		{
			return _entities.AsEnumerable();
		}

		public virtual TEntity Get(Int64 id)
		{
			return _entities.SingleOrDefault(s => s.Id == id);
		}

		public virtual void Insert(TEntity entity)
		{
			if (entity == null)
				throw new ArgumentNullException("Passed entity is null");
			_entities.Add(entity);
			SaveChanges();
		}

		public virtual void Update(TEntity entity)
		{
			if (entity == null)
				throw new ArgumentNullException("Passed entity is null");
			SaveChanges();
		}

		public virtual void Delete(TEntity entity)
		{
			if (entity == null)
				throw new ArgumentNullException("Passed entity is null");
		}

		public virtual void Remove(TEntity entity)
		{
			if (entity == null)
				throw new ArgumentNullException("Passed entity is null");
			_entities.Remove(entity);
			SaveChanges();
		}

		public virtual void SaveChanges()
		{
			ProcessChangedEntities();
			_context.SaveChanges();
		}

		private void ProcessChangedEntities()
		{
			var currentTime = DateTime.Now;
			foreach (var entityEntry in _context.ChangeTracker.Entries<TEntity>().Where(entityEntry => entityEntry.Entity != null))
			{
				if (entityEntry.State == EntityState.Added)
					entityEntry.Entity.CreatedDate = currentTime;
				entityEntry.Entity.LastModifiedDate = currentTime;
			}
		}
	}
}
