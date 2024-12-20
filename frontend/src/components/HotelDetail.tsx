import React from "react";
import { Hotel } from "../types/Hotel";
import { formatDateRange } from "../utils/dateUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMapMarkerAlt,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { getBoardBasisColor } from "../utils/colorUtils";

interface HotelDetailProps {
  hotel: Hotel;
}

const HotelDetail: React.FC<HotelDetailProps> = ({ hotel }) => {
  return (
    <div className="hotel-detail max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <img
        src={hotel.imageUrl}
        alt={hotel.name}
        className="rounded-lg w-full h-64 object-cover mb-6"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://via.placeholder.com/600x400?text=Image+Unavailable";
        }}
      />

      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">{hotel.name}</h1>
        <p className="text-gray-600 flex items-center">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="mr-2 text-blue-500"
          />
          {hotel.location}
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-yellow-500 text-xl">
          <span>{hotel.rating}</span>
          <FontAwesomeIcon icon={faStar} className="ml-1" />
        </div>
        <p className="text-green-600 font-semibold text-lg">
          €{hotel.price.toLocaleString()} / night
        </p>
      </div>

      <div className="flex justify-between bg-gray-100 p-4 rounded-lg mb-6">
        <p className="text-gray-600">
          <strong>Dates:</strong>{" "}
          {hotel.datesOfTravel?.length === 2
            ? formatDateRange(hotel.datesOfTravel[0], hotel.datesOfTravel[1])
            : "No dates available"}
        </p>
        {hotel.boardBasis && (
          <div
            className={`text-white text-sm font-semibold px-3 py-1 rounded-lg shadow ${getBoardBasisColor(
              hotel.boardBasis
            )}`}
          >
            {hotel.boardBasis}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
        <ul className="space-y-2">
          {hotel.rooms.map((room, index) => (
            <li
              key={index}
              className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <FontAwesomeIcon icon={faBed} className="text-blue-500 mr-3" />
              <p className="text-gray-700">
                {room.roomType}:{" "}
                <span className="font-bold">{room.amount} available</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotelDetail;
