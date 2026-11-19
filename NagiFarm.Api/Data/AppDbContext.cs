using System.Dynamic;
using Microsoft.EntityFrameworkCore;
using NagiFarm.Api.Models;

namespace NagiFarm.Api.Data;


public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>(e =>
        {
            e.ToTable("users", t => t.HasCheckConstraint("ck_users_role", "role IN ('owner', 'worker')"));

            e.HasKey(x => x.Id);
            e.Property(x => x.Id).HasDefaultValueSql("gen_random_uuid()");
            e.Property(x => x.Name).IsRequired().HasMaxLength(100);
            e.Property(x => x.Username).IsRequired().HasMaxLength(50);
            e.HasIndex(x => x.Username).IsUnique();
            e.Property(x => x.PasswordHash).IsRequired();
            e.Property(x => x.Role).IsRequired().HasMaxLength(20).HasDefaultValue("worker");
            e.Property(x => x.IsActive).IsRequired().HasDefaultValue(true);
            e.Property(x => x.CreatedAt).IsRequired().HasDefaultValueSql("now()");
            e.Property(x => x.UpdatedAt).IsRequired().HasDefaultValueSql("now()");
        });
    }
}