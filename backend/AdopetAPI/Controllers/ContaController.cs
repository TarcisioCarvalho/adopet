using AdopetAPI.Data;
using AdopetAPI.Services;
using AdopetAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AdopetAPI.Controllers;

[ApiController]
public class ContaController:ControllerBase
{
    [HttpPost("v1/contar")]
    public async Task<IActionResult> Post(
        [FromBody] RegistrarViewModel model,
        [FromServices] AdopetDbContext context 
    )
    {
        // Parei aki
        if(!ModelState.IsValid)
            return BadRequest();
    }
    [HttpPost("v1/contas/login")]
    public IActionResult Login([FromServices] TokenService tokenService)
    {
        var token = tokenService.GenerateToken(null);
        return Ok(token);
    } 
}