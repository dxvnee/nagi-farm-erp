using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NagiFarm.Api.Data;
using NagiFarm.Api.Models;
using NagiFarm.Api.Services;
using NagiFarm.Api.Services.Interfaces;
using NagiFarm.Api.Middleware;
using Asp.Versioning;


var builder = WebApplication.CreateBuilder(args);

// 1. Database & Services
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
        .UseSnakeCaseNamingConvention());

builder.Services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();
builder.Services.AddScoped<IJwtTokenService, JwtTokenService>();
builder.Services.AddScoped<IAuthService, AuthService>();

builder.Services.AddControllers();
builder.Services.AddOpenApi();

// 2. CORS
builder.Services.AddCors(opt => opt.AddPolicy("NextJs", p =>
    p.WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod()));

// API VERSIONING
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1.0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
    options.ApiVersionReader = new UrlSegmentApiVersionReader();
}).AddApiExplorer(options =>
{
    options.GroupNameFormat = "'v'VVV"; // format: v1
    options.SubstituteApiVersionInUrl = true;
});

// 3. JWT Auth
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt =>
    {
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
        };
    });

builder.Services.AddAuthorization();

var app = builder.Build();

// Exception
app.UseMiddleware<ExceptionMiddleware>();


// 4. Jalankan Seeder
await DbSeeder.SeedAsync(app.Services);

// 5. HTTP Pipeline (urutan middleware itu penting)
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("NextJs");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();