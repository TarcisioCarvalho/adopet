using AdopetAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdopetAPI.Data.Mappings;

public class UsuarioMap : IEntityTypeConfiguration<Usuario>
{
    public void Configure(EntityTypeBuilder<Usuario> builder)
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
            .HasMaxLength(50);
    }
}