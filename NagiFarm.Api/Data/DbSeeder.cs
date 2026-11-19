using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NagiFarm.Api.Models;

namespace NagiFarm.Api.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        var hasher = scope.ServiceProvider.GetRequiredService<IPasswordHasher<User>>();

        if (!await db.Users.AnyAsync())
        {
            var owner = new User
            {
                Name = "Egi",
                Username = "Egi",
                Role = "owner"
            };
            owner.PasswordHash = hasher.HashPassword(owner, "nagi1234");

            db.Users.Add(owner);
            await db.SaveChangesAsync();
        }
    }
}