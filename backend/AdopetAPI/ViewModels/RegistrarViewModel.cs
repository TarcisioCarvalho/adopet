using System.ComponentModel.DataAnnotations;

namespace AdopetAPI.ViewModels;

public class RegistrarViewModel
{
    [Required(ErrorMessage ="Nome é Obrigatório")]
    public string Nome { get; set; }
    
    [Required(ErrorMessage ="O E-mail é Obrigatório")]
    [EmailAddress(ErrorMessage ="O E-mail é Inválido")]
    public string Email { get; set; }
}