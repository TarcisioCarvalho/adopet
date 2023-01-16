using AdopetAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace AdopetAPI.Controllers;

[ApiController]
public class ContaController:ControllerBase
{
    [HttpPost("v1/login")]
    public IActionResult Login([FromServices] TokenService tokenService)
    {
        var token = tokenService.GenerateToken(null);
        return Ok(token);
    } 
}