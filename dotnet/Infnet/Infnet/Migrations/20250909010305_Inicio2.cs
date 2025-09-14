using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infnet.Migrations
{
    /// <inheritdoc />
    public partial class Inicio2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteAt",
                table: "Alunos",
                type: "datetime2",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Alunos",
                keyColumn: "id_aluno",
                keyValue: 1,
                column: "DeleteAt",
                value: null);

            migrationBuilder.UpdateData(
                table: "Alunos",
                keyColumn: "id_aluno",
                keyValue: 2,
                column: "DeleteAt",
                value: null);

            migrationBuilder.UpdateData(
                table: "Alunos",
                keyColumn: "id_aluno",
                keyValue: 3,
                column: "DeleteAt",
                value: null);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeleteAt",
                table: "Alunos");
        }
    }
}
