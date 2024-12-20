using System.ComponentModel.DataAnnotations;

namespace Backend.Models.DTOs
{
    public class ErrorResponse
    {
        [Required]
        public int StatusCode { get; set; }

        [Required, MaxLength(500)]
        public string Message { get; set; } = string.Empty;
    }
}
