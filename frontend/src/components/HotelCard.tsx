import React from "react";
import { Hotel } from "../types/Hotel";
import { formatDateRange } from "../utils/dateUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { getBoardBasisColor } from "../utils/colorUtils";

interface HotelCardProps {
  hotel: Hotel;
  onClick: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hotel-card relative border shadow-lg rounded-lg p-4 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
    >
      <div className="relative">
        {hotel.boardBasis && (
          <div
            className={`absolute top-2 left-2 text-white text-sm font-semibold px-3 py-1 rounded-full shadow ${getBoardBasisColor(
              hotel.boardBasis
            )}`}
          >
            {hotel.boardBasis}
          </div>
        )}
        <img
          src={hotel.imageUrl}
          alt={hotel.name || "Hotel image"}
          className="rounded-md w-full h-40 object-cover mb-4"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/300x200?text=Image+Unavailable";
          }}
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-gray-800 truncate">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="mr-2 text-blue-500"
          />
          {hotel.location}
        </span>
        <span className="flex items-center text-yellow-500">
          <span className="text-sm">{hotel.rating}</span>
          <FontAwesomeIcon icon={faStar} className="ml-1" />
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 truncate">{hotel.name}</h3>
      <p className="text-gray-600">
        Dates:{" "}
        {hotel.datesOfTravel && hotel.datesOfTravel.length === 2
          ? formatDateRange(hotel.datesOfTravel[0], hotel.datesOfTravel[1])
          : "No dates available"}
      </p>
      <p className="text-gray-600">
        Rooms:{" "}
        {hotel.rooms
          ?.map((room) => `${room.roomType} (${room.amount})`)
          .join(", ") || "No rooms available"}
      </p>
      <p className="text-green-600 font-semibold mt-2">
        Price: €{hotel.price?.toLocaleString() || "N/A"} / night
      </p>
    </div>
  );
};

export default HotelCard;
