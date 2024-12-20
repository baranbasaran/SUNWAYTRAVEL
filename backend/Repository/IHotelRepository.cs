using Backend.Models;

namespace Backend.Repository
{
    public interface IHotelRepository
    {
        IEnumerable<Hotel> GetAllHotels();
        Hotel? GetHotelById(int id);
    }
}
