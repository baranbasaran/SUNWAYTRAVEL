using System.ComponentModel.DataAnnotations;

namespace Backend.Models.DTOs
{
    public class HotelResponseDto
    {
        [Required]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Location { get; set; } = string.Empty;

        [Range(0.0, 5.0)]
        public double? Rating { get; set; }

        [Url]
        public string? ImageUrl { get; set; }

        public List<string>? DatesOfTravel { get; set; } = new List<string>();

        [MaxLength(50)]
        public string? BoardBasis { get; set; } = string.Empty;

        public List<Room>? Rooms { get; set; } = new List<Room>();

        [Required, Range(0, int.MaxValue)]
        public int Price { get; set; }
    }
}