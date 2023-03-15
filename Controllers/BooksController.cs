using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bookish.Context;
using Bookish.Models;
using Microsoft.AspNetCore.Cors;
using NuGet.Protocol;

namespace bookish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class BooksController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BooksController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBook()
        {
          if (_context.Book == null)
          {
              return NotFound();
          }
            return await _context.Book.ToListAsync();
        }

        [HttpGet("Stock")]
        public async Task<ActionResult<IEnumerable<Book>>> GetLowStockBook()
        {
            Console.WriteLine("check low stock");
            if (_context.Book == null)
            {
                return NotFound();
            }
            var books = await _context.Book.Where(b => b.Stock < 5).ToListAsync();
            
            Console.WriteLine(books);

            if (!books.Any())
            {
                return NotFound();
            }

            return books;
        }

        // GET: api/Books/5
        [HttpGet("OLID/{OLID}")]
        public async Task<ActionResult<Book>> GetBook(string OLID)
        {
            Console.WriteLine(OLID);
          if (_context.Book == null)
          {
              return NotFound();
          }
            var book = await _context.Book.FirstOrDefaultAsync(b => b.OLID == OLID);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("OLID/{OLID}")]
        public async Task<IActionResult> PutBook(string OLID, Book book)
        {
            
            if (OLID != book.OLID)
            {
                return BadRequest();
            }

            _context.Entry(book).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(OLID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        /*   [HttpPut("OLID/{OLID}")]
           public async Task<IActionResult> PutBook(string OLID, Book book)
           {
               Console.WriteLine(book.Name);
               if (OLID != book.OLID)
               {
                   return BadRequest();
               }

               _context.Entry(book).State = EntityState.Modified;

               try
               {
                   await _context.SaveChangesAsync();
               }
               catch (DbUpdateConcurrencyException ex)
               {
                   var entry = ex.Entries.Single();
                   var databaseValues = await entry.GetDatabaseValuesAsync();
                   if (databaseValues == null)
                   {
                       return NotFound();
                   }
                   else
                   {
                       // Update the entry with the values from the database
                       var databaseEntry = databaseValues.ToObject();
                       entry.CurrentValues.SetValues(databaseEntry);

                       // Save the changes again and handle any exceptions
                       try
                       {
                           await _context.SaveChangesAsync();
                       }
                       catch (Exception)
                       {
                           // Handle the exception as needed
                           throw;   
                       }
                   }
               }
               return NoContent();
           }*/

        // POST: api/Books
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
          Console.WriteLine(book.Name);
          if (_context.Book == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Book'  is null.");
          }
            _context.Book.Add(book);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBook", new { id = book.Id }, book);
        }

        // DELETE: api/Books/5
        [HttpDelete("OLID/{OLID}")]
        public async Task<IActionResult> DeleteBook(string OLID)
        {
            if (_context.Book == null)
            {
                return NotFound();
            }
            var book = await _context.Book.FirstOrDefaultAsync(b => b.OLID == OLID); ;
            if (book == null)
            {
                return NotFound();
            }

            _context.Book.Remove(book);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookExists(string OLID)
        {
            return (_context.Book?.Any(e => e.OLID == OLID)).GetValueOrDefault();
        }
    }
}
