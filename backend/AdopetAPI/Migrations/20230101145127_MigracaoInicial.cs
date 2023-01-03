using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AdopetAPI.Migrations
{
    /// <inheritdoc />
    public partial class MigracaoInicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "NVARCHAR", maxLength: 80, nullable: false),
                    Email = table.Column<string>(type: "NVARCHAR", maxLength: 320, nullable: false),
                    EnderecoFotoPerfil = table.Column<string>(type: "NVARCHAR", maxLength: 300, nullable: true),
                    Telefone = table.Column<string>(type: "CHAR", maxLength: 11, nullable: true),
                    Sobre = table.Column<string>(type: "NVARCHAR", maxLength: 600, nullable: true),
                    RegistradoEm = table.Column<DateTime>(type: "TEXT", nullable: false, defaultValue: new DateTime(2023, 1, 1, 11, 51, 26, 966, DateTimeKind.Local).AddTicks(4526)),
                    Cidade = table.Column<string>(type: "VARCHAR", maxLength: 200, nullable: true),
                    Senha = table.Column<string>(type: "CHAR", maxLength: 16, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
