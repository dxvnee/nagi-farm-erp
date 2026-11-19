using System.Security.Claims;
using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NagiFarm.Api.Common;
using NagiFarm.Api.DTOs;
using NagiFarm.Api.Services.Interfaces;

namespace NagiFarm.Api.Controllers.v1;

[ApiController]
[ApiVersion(1.0)]
[Route("api/v{version:apiVersion}/auth")]
public class AuthController(IAuthService authService) : ControllerBase
{
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request, CancellationToken ct)
    {
        var result = await authService.LoginAsync(request, ct);
        return Ok(ApiResponse<LoginResponse>.Ok(result, "Login berhasil."));
    }

    [Authorize]
    [HttpGet("me")]
    public IActionResult Me()
    {
        var user = new
        {
            id = User.FindFirstValue(ClaimTypes.NameIdentifier),
            name = User.FindFirstValue(ClaimTypes.Name),
            username = User.FindFirstValue("username"),
            role = User.FindFirstValue(ClaimTypes.Role)
        };
        return Ok(ApiResponse<object>.Ok(user));
    }
}