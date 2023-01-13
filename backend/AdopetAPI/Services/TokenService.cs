using System.IdentityModel.Tokens.Jwt;
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
        var tokenDescriptor  = new SecurityTokenDescriptor();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}