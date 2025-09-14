using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infnet.Migrations
{
    /// <inheritdoc />
    public partial class Inicio : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Alunos",
                columns: table => new
                {
                    id_aluno = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome_aluno = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alunos", x => x.id_aluno);
                });

            migrationBuilder.CreateTable(
                name: "Disciplinas",
                columns: table => new
                {
                    id_disciplina = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome_disciplina = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Disciplinas", x => x.id_disciplina);
                });

            migrationBuilder.CreateTable(
                name: "Emails",
                columns: table => new
                {
                    id_email = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mail = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    AlunoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emails", x => x.id_email);
                    table.ForeignKey(
                        name: "FK_Emails_Alunos_AlunoId",
                        column: x => x.AlunoId,
                        principalTable: "Alunos",
                        principalColumn: "id_aluno",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Enderecos",
                columns: table => new
                {
                    id_endereco = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Rua = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Cep = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AlunoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enderecos", x => x.id_endereco);
                    table.ForeignKey(
                        name: "FK_Enderecos_Alunos_AlunoId",
                        column: x => x.AlunoId,
                        principalTable: "Alunos",
                        principalColumn: "id_aluno",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AlunosDisciplinas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    id_aluno = table.Column<int>(type: "int", nullable: false),
                    id_disciplina = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AlunosDisciplinas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AlunosDisciplinas_Alunos_id_aluno",
                        column: x => x.id_aluno,
                        principalTable: "Alunos",
                        principalColumn: "id_aluno",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AlunosDisciplinas_Disciplinas_id_disciplina",
                        column: x => x.id_disciplina,
                        principalTable: "Disciplinas",
                        principalColumn: "id_disciplina",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Alunos",
                columns: new[] { "id_aluno", "nome_aluno" },
                values: new object[,]
                {
                    { 1, "Aluno 1" },
                    { 2, "Aluno 2" },
                    { 3, "Aluno 3" }
                });

            migrationBuilder.InsertData(
                table: "Disciplinas",
                columns: new[] { "id_disciplina", "nome_disciplina" },
                values: new object[,]
                {
                    { 1, "Disciplina 1" },
                    { 2, "Disciplina 2" },
                    { 3, "Disciplina 3" }
                });

            migrationBuilder.InsertData(
                table: "AlunosDisciplinas",
                columns: new[] { "Id", "id_aluno", "id_disciplina" },
                values: new object[,]
                {
                    { 1, 1, 1 },
                    { 2, 2, 1 },
                    { 3, 2, 2 },
                    { 4, 3, 1 },
                    { 5, 3, 2 },
                    { 6, 3, 3 }
                });

            migrationBuilder.InsertData(
                table: "Emails",
                columns: new[] { "id_email", "AlunoId", "Mail" },
                values: new object[,]
                {
                    { 1, 1, "aluno1@email.com" },
                    { 2, 2, "aluno2@email.com" },
                    { 3, 2, "aluno2@gmail.com" },
                    { 4, 3, "aluno3@email.com" },
                    { 5, 3, "aluno3@gmail.com" },
                    { 6, 3, "aluno3@infnet.edu" }
                });

            migrationBuilder.InsertData(
                table: "Enderecos",
                columns: new[] { "id_endereco", "AlunoId", "Cep", "Rua" },
                values: new object[,]
                {
                    { 1, 1, "11111-111", "Endereço do aluno 1" },
                    { 2, 2, "22222-222", "Endereço do aluno 2" },
                    { 3, 3, "33333-333", "Endereço do aluno 3" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AlunosDisciplinas_id_aluno",
                table: "AlunosDisciplinas",
                column: "id_aluno");

            migrationBuilder.CreateIndex(
                name: "IX_AlunosDisciplinas_id_disciplina",
                table: "AlunosDisciplinas",
                column: "id_disciplina");

            migrationBuilder.CreateIndex(
                name: "IX_Emails_AlunoId",
                table: "Emails",
                column: "AlunoId");

            migrationBuilder.CreateIndex(
                name: "IX_Enderecos_AlunoId",
                table: "Enderecos",
                column: "AlunoId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AlunosDisciplinas");

            migrationBuilder.DropTable(
                name: "Emails");

            migrationBuilder.DropTable(
                name: "Enderecos");

            migrationBuilder.DropTable(
                name: "Disciplinas");

            migrationBuilder.DropTable(
                name: "Alunos");
        }
    }
}
