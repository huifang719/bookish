namespace Bookish.Models
{
    public class Book
    {
        public string OLID { get; set; } = null!;
        public string Name { get; set; } = null!;
        public double Price { get; set; }
        public int Stock { get; set; }
    }
}
