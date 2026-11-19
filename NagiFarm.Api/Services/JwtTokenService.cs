

using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using NagiFarm.Api.Models;
using NagiFarm.Api.Services.Interfaces;

namespace NagiFarm.Api.Services;

public class JwtTokenService(IConfiguration config) : IJwtTokenService
{
    public (string Token, DateTime ExpiresAt) Generate(User user)
    {
        var jwt = config.GetSection("Jwt");
        var keyString = jwt["Key"] ?? throw new InvalidOperationException("JWT Key belum dikonfigurasi di appsettings.json.");
        var expireMinutes = int.TryParse(jwt["ExpireMinutes"], out var mins) ? mins : 120;
        var expires = DateTime.UtcNow.AddMinutes(expireMinutes);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.Name),
            new Claim(ClaimTypes.Role, user.Role),
            new Claim("username", user.Username)
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(keyString));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: jwt["Issuer"],
            audience: jwt["Audience"],
            claims: claims,
            expires: expires,
            signingCredentials: credentials
        );

        return (new JwtSecurityTokenHandler().WriteToken(token), expires);
    }
}