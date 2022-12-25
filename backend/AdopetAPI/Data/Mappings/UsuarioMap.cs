using AdopetAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdopetAPI.Data.Mappings;

public class UsuarioMap : IEntityTypeConfiguration<Usuario>
{
    public void Configure
    (EntityTypeBuilder<Usuario> builder)
    {
        builder.ToTable("Usuarios");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedOnAdd();

        builder.Property(x => x.Nome)
            .IsRequired()
            .HasColumnType("NVARCHAR")
            .HasMaxLength(80);

        builder.Property(x => x.Email)
            .IsRequired()
            .HasColumnType("NVARCHAR")
            .HasMaxLength(320);
        
        builder.Property(x => x.Senha)
            .IsRequired()
            .HasColumnType("CHAR")
            .HasMaxLength(16);

        builder.Property(x => x.Telefone)
            .HasColumnType("CHAR")
            .HasMaxLength(11);

        builder.Property(x => x.Cidade)
            .HasColumnType("VARCHAR")
            .HasMaxLength(200);
        
        builder.Property(x => x.EnderecoFotoPerfil)
            .HasColumnType("NVARCHAR")
            .HasMaxLength(300);

        builder.Property(x => x.Sobre)
            .HasColumnType("NVARCHAR")
            .HasMaxLength(600);
        
        builder.Property(x => x.RegistradoEm)
            .HasDefaultValue(DateTime.Now)
            .ValueGeneratedOnAdd();

    }
}