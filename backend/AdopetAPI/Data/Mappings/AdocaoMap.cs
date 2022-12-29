using AdopetAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdopetAPI.Data.Mappings;

public class AdocaoMap : IEntityTypeConfiguration<Adocao>
{
    public void Configure(EntityTypeBuilder<Adocao> builder)
    {
        throw new NotImplementedException();
    }
}