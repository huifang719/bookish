using Microsoft.AspNetCore.Identity;

namespace bookish.Models
{
    public class User : IdentityUser
    {
        public bool IsAdmin { get; set; }
        public string? AdminToken { get; set; }
    }
}
