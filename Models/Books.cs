namespace Bookish.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string OLID { get; set; } = null!;
        public string Name { get; set; } = null!;
        public double Price { get; set; }
        public int Stock { get; set; }
    }
}