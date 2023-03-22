using Bookish.Context;
/*using Bookish.data.migrations;*/
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Query.Expressions.Internal;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using static System.Runtime.InteropServices.JavaScript.JSType;
using Bookish.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace Bookish.Context
{
    public class ApplicationDbContext : IdentityDbContext<bookish.Models.User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Bookish.Models.Book> Book { get; set; } = default!;
        public DbSet<Book> Books { get; set; }

    }
}

//Migration command add - migration InitialMigration - c applicationdbcontext - o data / migrations
//update Update - Database