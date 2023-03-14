namespace Bookish.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string OLID { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;    
        public double Price { get; set; }
        public int Stock { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
    }
}