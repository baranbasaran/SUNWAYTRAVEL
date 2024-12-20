
using Backend.Models;
using Backend.Repository;

namespace Backend.Services
{
    public class HotelService : IHotelService
    {
        private readonly IHotelRepository _repository;

        public HotelService(IHotelRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<Hotel> GetAllHotels()
        {
            return _repository.GetAllHotels();
        }

        public Hotel? GetHotelById(int id)
        {
            return _repository.GetHotelById(id);
        }
    }
}