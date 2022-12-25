namespace AdopetAPI.Models;

public class Adocao
{
    public int Id { get; set; }
    public DateTime DataAdocao { get; set; }
    public Usuario UsuarioDono { get; set; }
    public int UsuarioDonoId { get; set; }
    public Usuario UsuarioAdotante { get; set; }
    public int UsuarioAdotanteId { get; set; }
    public Animal Animal { get; set; }
    public int AnimalId { get; set; }
}