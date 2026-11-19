using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NagiFarm.Api.Common;
using NagiFarm.Api.Data;
using NagiFarm.Api.DTOs;
using NagiFarm.Api.Models;
using NagiFarm.Api.Services.Interfaces;

namespace NagiFarm.Api.Services;

public class AuthService(AppDbContext db, IPasswordHasher<User> hasher, IJwtTokenService jwt) : IAuthService
{
    public async Task<LoginResponse> LoginAsync(LoginRequest request, CancellationToken ct = default)
    {
        var normalizedUsername = request.Username.Trim().ToLowerInvariant();

        var user = await db.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(u => u.Username.ToLower() == normalizedUsername && u.IsActive, ct)
            ?? throw new AppException("Username atau password salah.", StatusCodes.Status401Unauthorized);

        var verify = hasher.VerifyHashedPassword(user, user.PasswordHash, request.Password);
        if (verify == PasswordVerificationResult.Failed)
            throw new AppException("Username atau password salah.", StatusCodes.Status401Unauthorized);

        var (Token, ExpiresAt) = jwt.Generate(user);
        var userDto = new UserDto(user.Id, user.Name, user.Username, user.Role);

        return new LoginResponse(Token, ExpiresAt, userDto);
    }
}