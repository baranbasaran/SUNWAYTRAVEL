using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Room
    {
        [Required, MaxLength(50)]
        public string RoomType { get; set; } = string.Empty;

        [Range(0, int.MaxValue)]
        public int Amount { get; set; }
    }
}