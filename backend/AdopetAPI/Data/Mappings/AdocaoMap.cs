using AdopetAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdopetAPI.Data.Mappings;

public class AdocaoMap : IEntityTypeConfiguration<Adocao>
{
    public void Configure(EntityTypeBuilder<Adocao> builder)
    {
        builder.ToTable("Adocoes");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedOnAdd();

        builder.Property(x => x.DataAdocao)
            .HasDefaultValue(DateTime.Now)
            .ValueGeneratedOnAdd();
    }
}