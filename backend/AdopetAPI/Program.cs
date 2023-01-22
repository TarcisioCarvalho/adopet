using System.Text;
using AdopetAPI;
using AdopetAPI.Data;
using AdopetAPI.Services;

var builder = WebApplication.CreateBuilder(args);

var key = Encoding.ASCII.GetBytes(Configuration.JwtKey);

builder
.Services
.AddControllers()
.ConfigureApiBehaviorOptions(options =>
{
    options.SuppressModelStateInvalidFilter = true;
}
);
builder.Services.AddDbContext<AdopetDbContext>();
builder.Services.AddTransient<TokenService>();



var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
