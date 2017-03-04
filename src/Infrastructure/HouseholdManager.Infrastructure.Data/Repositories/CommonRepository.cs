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
		private readonly DataContext _context;
		private readonly DbSet<TEntity> _entities;

		public CommonRepository(DataContext context)
		{
			_context = context;
			_entities = context.Set<TEntity>();
		}

		public IEnumerable<TEntity> GetAll()
		{
			return _entities.AsEnumerable();
		}

		public TEntity Get(Int64 id)
		{
			return _entities.SingleOrDefault(s => s.Id == id);
		}

		public void Insert(TEntity entity)
		{
			if (entity == null)
				throw new ArgumentNullException("Passed entity is null");
			_entities.Add(entity);
			SaveChanges();
		}

		public void Update(TEntity entity)
		{
			if (entity == null)
				throw new ArgumentNullException("Passed entity is null");
			SaveChanges();
		}

		public void Delete(TEntity entity)
		{
			if (entity == null)
				throw new ArgumentNullException("Passed entity is null");
		}

		public void Remove(TEntity entity)
		{
			if (entity == null)
				throw new ArgumentNullException("Passed entity is null");
			_entities.Remove(entity);
			SaveChanges();
		}

		public void SaveChanges()
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
