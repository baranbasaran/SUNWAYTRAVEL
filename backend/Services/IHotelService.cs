using Backend.Models;

namespace Backend.Services
{
    public interface IHotelService
    {
        IEnumerable<Hotel> GetAllHotels();
        Hotel? GetHotelById(int id);
    }
}