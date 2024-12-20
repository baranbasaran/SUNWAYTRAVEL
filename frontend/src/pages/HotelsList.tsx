import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHotels } from "../services/api";
import { Hotel } from "../types/Hotel";
import HotelCard from "../components/HotelCard";

const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await getHotels();
        setHotels(data);
      } catch (err: any) {
        console.error(err);
        setError(
          err.message || "Unable to load destinations. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-center text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (hotels.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-center text-gray-600 text-lg">
          No destinations available at the moment. Please check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Explore Your Next Destination
        </h1>
        <p className="text-gray-600 mt-2">
          Find your perfect getaway with our handpicked selection of top-rated
          stays.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onClick={() => navigate(`/hotels/${hotel.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelsList;
