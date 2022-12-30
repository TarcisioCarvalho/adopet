using AdopetAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdopetAPI.Data.Mappings;

public class AnimalMap : IEntityTypeConfiguration<Animal>
{
    public void Configure(EntityTypeBuilder<Animal> builder)
    {
        builder.ToTable("Animais");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedOnAdd();

        builder.Property(x => x.Nome)
            .IsRequired()
            .HasColumnType("NVARCHAR")
            .HasMaxLength(80);

        builder.Property(x => x.Sexo)
            .IsRequired()
            .HasColumnType("CHAR")
            .HasMaxLength(1);
        
        builder.Property(x => x.EnderecoFoto)
            .HasColumnType("NVARCHAR")
            .HasMaxLength(300);
        
        builder.Property(x => x.DataNascimento)
            .IsRequired()
            .HasColumnType("DATE");
        
        builder.Property(x => x.Tamanho)
            .HasColumnType("CHAR")
            .HasMaxLength(1);

        
    }
}