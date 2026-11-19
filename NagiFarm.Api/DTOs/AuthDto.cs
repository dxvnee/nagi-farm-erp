namespace NagiFarm.Api.DTOs;

public record LoginRequest(string Username, string Password);

public record UserDto(Guid Id, string Name, string Username, string Role);

public record LoginResponse(string Token, DateTime ExpiresAt, UserDto User);