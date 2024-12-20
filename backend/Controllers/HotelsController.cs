
using Microsoft.AspNetCore.Mvc;
using Backend.Exceptions;
using Backend.Models.DTOs;
using Backend.Services;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HotelsController : ControllerBase
    {
        private readonly IHotelService _hotelService;
        private readonly ILogger<HotelsController> _logger;

        public HotelsController(IHotelService hotelService, ILogger<HotelsController> logger)
        {
            _hotelService = hotelService;
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<HotelResponseDto>> GetHotels()
        {
            try
            {
                var hotels = _hotelService.GetAllHotels();
                if (!hotels.Any())
                {
                    throw new HotelNotFoundException("No hotels available.");
                }

                var response = hotels.Select(hotel => new HotelResponseDto
                {
                    Id = hotel.Id,
                    Name = hotel.Name,
                    Location = hotel.Location,
                    Rating = hotel.Rating,
                    ImageUrl = hotel.ImageUrl,
                    DatesOfTravel = hotel.DatesOfTravel,
                    BoardBasis = hotel.BoardBasis,
                    Rooms = hotel.Rooms,
                    Price = hotel.Price,
                });

                return Ok(response);
            }
            catch (HotelNotFoundException ex)
            {
                _logger.LogWarning(ex.Message);
                return NotFound(new ErrorResponse
                {
                    StatusCode = 404,
                    Message = ex.Message
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching hotels.");
                return StatusCode(500, new ErrorResponse
                {
                    StatusCode = 500,
                    Message = "An internal server error occurred."
                });
            }
        }

        [HttpGet("{id:int}")]
        public ActionResult<HotelResponseDto> GetHotelById(int id)
        {
            try
            {
                if (id <= 0)
                {
                    throw new InvalidInputException("Hotel ID must be a positive number.");
                }

                var hotel = _hotelService.GetHotelById(id);
                if (hotel == null)
                {
                    throw new HotelNotFoundException($"Hotel with ID {id} not found.");
                }

                var response = new HotelResponseDto
                {
                    Id = hotel.Id,
                    Name = hotel.Name,
                    Location = hotel.Location,
                    Rating = hotel.Rating,
                    ImageUrl = hotel.ImageUrl,
                    DatesOfTravel = hotel.DatesOfTravel,
                    BoardBasis = hotel.BoardBasis,
                    Rooms = hotel.Rooms,
                    Price = hotel.Price,
                };

                return Ok(response);
            }
            catch (InvalidInputException ex)
            {
                _logger.LogWarning(ex.Message);
                return BadRequest(new ErrorResponse
                {
                    StatusCode = 400,
                    Message = ex.Message
                });
            }
            catch (HotelNotFoundException ex)
            {
                _logger.LogWarning(ex.Message);
                return NotFound(new ErrorResponse
                {
                    StatusCode = 404,
                    Message = ex.Message
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching hotel details.");
                return StatusCode(500, new ErrorResponse
                {
                    StatusCode = 500,
                    Message = "An internal server error occurred."
                });
            }
        }

    }
}
