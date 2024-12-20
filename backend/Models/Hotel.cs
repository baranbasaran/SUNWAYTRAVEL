using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Hotel
    {
        [Required]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Location { get; set; } = string.Empty;

        [Range(0.0, 5.0, ErrorMessage = "Rating must be between 0.0 and 5.0.")]
        public double Rating { get; set; }

        [Url(ErrorMessage = "Invalid URL format.")]
        public string ImageUrl { get; set; } = string.Empty;

        public List<string> DatesOfTravel { get; set; } = new List<string>();

        [MaxLength(50, ErrorMessage = "Board Basis cannot exceed 50 characters.")]
        public string BoardBasis { get; set; } = string.Empty;

        public List<Room> Rooms { get; set; } = new List<Room>();

        [Required, Range(0, int.MaxValue, ErrorMessage = "Price must be a non-negative value.")]
        public int Price { get; set; }
    }
}