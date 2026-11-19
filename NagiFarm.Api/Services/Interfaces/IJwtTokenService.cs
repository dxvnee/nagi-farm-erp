using NagiFarm.Api.Models;

namespace NagiFarm.Api.Services.Interfaces;

public interface IJwtTokenService
{
    (string Token, DateTime ExpiresAt) Generate(User user);
}