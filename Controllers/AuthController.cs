/*using bookish.Models;
using Bookish.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace bookish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context; 
        private readonly IConfiguration _configuration;
        public AuthController(ApplicationDbContext applicationDbContext, IConfiguration configuration) 
        {
            _context = applicationDbContext;
            _configuration = configuration;
        }

        //Login 
        [HttpPost]
        public async Task<IActionResult> Login(LoginModel loginModel)
        {
            if (!ModelState.IsValid) 
            { 
                return BadRequest();  
            }

            //check if the user exists
            var user = _context.Users.FirstOrDefault(user => user.Email == loginModel.Email && user.Password == loginModel.Password);
            if (user == null)
            {
                return Unauthorized();
            }

            //Create the Token
            var claims = new[]
            {
                new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt: Key"]));

            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                    issuer: _configuration["Jwt: Issuer"],
                    audience: _configuration["Jwt: Audience"],
                    claims: claims,
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: signingCredentials
                );
            return Ok(new
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }
    }
}
*/