using Microsoft.EntityFrameworkCore;

namespace AdopetAPI.Data;

public class AdopetDbContext:DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite("DataSource=adopet.db;Cache=Shared");
}

