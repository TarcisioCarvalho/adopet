using AdopetAPI.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<AdopetDbContext>();



var app = builder.Build();

app.MapControllers();

app.Run();
