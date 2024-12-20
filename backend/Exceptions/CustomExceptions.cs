namespace Backend.Exceptions
{
    public class HotelNotFoundException : Exception
    {
        public HotelNotFoundException(string message) : base(message) { }
    }

    public class InvalidInputException : Exception
    {
        public InvalidInputException(string message) : base(message) { }
    }
}
