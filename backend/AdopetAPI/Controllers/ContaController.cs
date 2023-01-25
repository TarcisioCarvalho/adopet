using AdopetAPI.Data;
using AdopetAPI.Extensions;
using AdopetAPI.Models;
using AdopetAPI.Services;
using AdopetAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SecureIdentity.Password;

namespace AdopetAPI.Controllers;

[ApiController]
public class ContaController:ControllerBase
{
    [HttpPost("v1/contas")]
    public async Task<IActionResult> Post(
        [FromBody] RegistrarViewModel model,
        [FromServices] AdopetDbContext context 
    )
    {
        // Parei aki
        if(!ModelState.IsValid)
            return BadRequest(new ResultViewModel<string>(ModelState.GetErrors()));

        var usuario = new Usuario
        {
          Nome = model.Nome,
          Email = model.Email,
          
        };

        var password = PasswordGenerator.Generate(25);
        usuario.Senha = PasswordHasher.Hash(password);

        try
        {
            await context.Usuarios.AddAsync(usuario);
            await context.SaveChangesAsync();

            return Ok(new ResultViewModel<dynamic>(new
            {
                usuario = usuario.Email, password
            }));
        }
        catch (DbUpdateException)
        {
            
            return StatusCode(400,new ResultViewModel<string>("05x99 - Este E-mail já está cadastrado"));
        }
        catch
        {
            return StatusCode(500,new ResultViewModel<string>("05x04 - Falha interna"));
        }
    }
    [HttpPost("v1/contas/login")]
    public IActionResult Login([FromServices] TokenService tokenService)
    {
        var token = tokenService.GenerateToken(null);
        return Ok(token);
    } 
}