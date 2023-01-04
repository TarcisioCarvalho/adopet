using System.ComponentModel.DataAnnotations;

namespace AdopetAPI.ViewModels;

public class CreateUsuarioViewModel
{
    [Required(ErrorMessage ="o nome é obrigatório")]
    [StringLength(40,MinimumLength =3,ErrorMessage ="O Nome deve conter entre 3 e 80 caracteres.")]
    public string Nome { get; set; }

    [Required(ErrorMessage ="o eE-mail é obrigatório")]
    [EmailAddress(ErrorMessage ="E-mail inválido")]
    public string Email { get; set; }
    
}