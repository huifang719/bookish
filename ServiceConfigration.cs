using bookish.Models;
using Bookish.Context;
using Microsoft.AspNetCore.Identity;

namespace bookish
{
    public static class ServiceConfigration
    {
        public static void ConfigurationIdentity(this IServiceCollection services) 
        { 
            var builder = services.AddIdentityCore<User>(q => q.User.RequireUniqueEmail = true);
            builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), services);
            builder.AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders(); 
        }
    }
}
