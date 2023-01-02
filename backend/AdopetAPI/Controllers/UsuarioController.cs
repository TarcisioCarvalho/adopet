using AdopetAPI.Data;
using AdopetAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
     [HttpGet("v1/usuarios")]
    public async Task<IActionResult> GetUsuariosAsync(
        [FromServices] AdopetDbContext context
    )
    {
        var usuarios = await context.Usuarios.ToListAsync();
        return Ok(usuarios);
    }

      [HttpGet("v1/usuarios/{id:int}")]
    public async Task<IActionResult> GetUsuarioIdAsync(
        [FromRoute] int id,
        [FromServices] AdopetDbContext context
    )
    {
        var usuario = await context.
        Usuarios.
        FirstOrDefaultAsync(x => x.Id == id);

        if(usuario == null) return NotFound();

        return Ok(usuario);
    }
    [HttpPost("v1/usuarios")]
    public async Task<IActionResult> PostUsuarioAsync(
        [FromBody] Usuario usuario,
        [FromServices] AdopetDbContext context
    )
    {
        await context.Usuarios.AddAsync(usuario);
        await context.SaveChangesAsync();

        

        return Created($"v1/usuarios/{usuario.Id}",usuario);
    }
    [HttpPut("v1/usuarios/{id:int}")]
    public async Task<IActionResult> PutUsuarioAsync(
        [FromBody] Usuario modelo,
        [FromRoute] int id,
        [FromServices] AdopetDbContext context
    )
    {
        var usuario = await context.
        Usuarios.
        FirstOrDefaultAsync(x => x.Id == id);

        if(usuario == null) return NotFound();

        usuario.Cidade = modelo.Cidade;
        usuario.Sobre = modelo.Sobre;
        usuario.EnderecoFotoPerfil = modelo.EnderecoFotoPerfil;

        context.Usuarios.Update(usuario);
        await context.SaveChangesAsync();

        return Ok(usuario);
    }
}