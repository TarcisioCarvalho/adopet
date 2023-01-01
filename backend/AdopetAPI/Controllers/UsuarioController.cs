using AdopetAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace AdopetAPI.Controllers;

[ApiController]
[Route("")]
public class UsuarioController:ControllerBase
{
    [HttpGet("")]
    public IActionResult Get()
    {
        return Ok();
    }
     [HttpGet("usuarios")]
    public IActionResult GetUsuarios(
        [FromServices] AdopetDbContext context
    )
    {
        var usuarios = context.Usuarios.ToList();
        return Ok(usuarios);
    }
}