using Bookish.Context;
using Bookish.data.migrations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using static System.Runtime.InteropServices.JavaScript.JSType;

#nullable disable

//migration command
//add - migration InitialMigration - c applicationdbcontext - o data / migrations
namespace Bookish.data.migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                    .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    OLID = table.Column<string>(type: "text", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    price = table.Column<int>(type: "int", nullable: false),
                    stock = table.Column<int>(type: "int", nullable: false)

                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                }
                );
            migrationBuilder.CreateTable(
               name: "Users",
               columns: table => new
               {
                   Id = table.Column<int>(type: "integer", nullable: false)
                   .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                   name = table.Column<string>(type: "text", nullable: false),
                   email = table.Column<string>(type: "text", nullable: false),
                   password = table.Column<string>(type: "text", nullable: false),
                   isadmin = table.Column<bool>(type: "boolean", nullable: false),
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Users", x => x.Id);
               }
               );
        }



        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
