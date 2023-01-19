using AdopetAPI.Data;
using AdopetAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<AdopetDbContext>();
builder.Services.AddTransient<TokenService>();



var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
