using AdopetAPI.Data.Mappings;
using AdopetAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AdopetAPI.Data;

public class AdopetDbContext:DbContext
{
    public DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite("DataSource=adopet.db;Cache=Shared");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UsuarioMap());
        // modelBuilder.ApplyConfiguration(new AnimalMap());
        // modelBuilder.ApplyConfiguration(new AdocaoMap());
        // modelBuilder.ApplyConfiguration(new MensagemMap());
    }
}

