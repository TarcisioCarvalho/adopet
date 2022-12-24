namespace AdopetAPI.Models;

public class Mensagem
{
    public int Id { get; set; }
    public Usuario DeUsuario { get; set; }
    public Usuario ParaUsuario { get; set; }
    public string Conteudo { get; set; }
    public int DeUsuarioId { get; set; }
    public int ParaUsuarioId { get; set; }
    public Animal Animal { get; set; }
    public int AnimalId { get; set; }
}