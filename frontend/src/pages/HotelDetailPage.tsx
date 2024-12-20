import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelDetail from "../components/HotelDetail";
import { getHotelById } from "../services/api";
import { Hotel } from "../types/Hotel";

const HotelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const fetchedHotel = await getHotelById(id!); // API handles validation
        setHotel(fetchedHotel);
      } catch (err) {
        console.error(err);
        setError(
          (err as Error).message ||
            "Failed to fetch hotel details. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading hotel details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            Hotel Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            We couldn't find the hotel you're looking for. Please try again.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return <HotelDetail hotel={hotel} />;
};

export default HotelDetailPage;
