namespace AdopetAPI.Models;

public class Usuario
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Email { get; set; }
    public string EnderecoFotoPerfil { get; set; }
    public string Telefone { get; set; }
    public string Sobre { get; set; }
    public string Cpf { get; set; }
    public DateTime DataNascimento { get; set; }
    public DateTime RegistradoEm { get; set; }
    public Endereco Endereco { get; set; }
    public string Senha { get; set; }
    public List<Animal> Animais { get; set; }
}