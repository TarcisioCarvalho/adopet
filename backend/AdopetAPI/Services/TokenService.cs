using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AdopetAPI.Models;
using Microsoft.IdentityModel.Tokens;

namespace AdopetAPI.Services;

public class TokenService
{
    public string GenerateToken(Usuario usuario)
    {
        
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(Configuration.JwtKey);
        var tokenDescriptor  = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new (ClaimTypes.Name,value:"Tarcísio")
            }),
            Expires = DateTime.UtcNow.AddHours(8),
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature
            )
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}