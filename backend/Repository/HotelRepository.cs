using Backend.Models;
using System.Text.Json;

namespace Backend.Repository
{
    public class HotelRepository : IHotelRepository
    {
        private readonly List<Hotel> _hotels;
        private readonly ILogger<HotelRepository> _logger;

        public HotelRepository(ILogger<HotelRepository> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            string jsonPath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "hotels.json");

            if (!File.Exists(jsonPath))
            {
                _logger.LogWarning("Hotels.json file not found at {Path}. Initializing an empty list.", jsonPath);
                _hotels = new List<Hotel>();
            }
            else
            {
                try
                {
                    var json = File.ReadAllText(jsonPath);
                    _hotels = JsonSerializer.Deserialize<List<Hotel>>(json, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    }) ?? new List<Hotel>();
                }
                catch (JsonException ex)
                {
                    _logger.LogError(ex, "Failed to parse the JSON file at {Path}.", jsonPath);
                    throw new Exception("An error occurred while loading the hotel data.");
                }
            }
        }

        public IEnumerable<Hotel> GetAllHotels()
        {
            return _hotels;
        }

        public Hotel? GetHotelById(int id)
        {
            return _hotels.FirstOrDefault(h => h.Id == id);
        }
    }
}
