import axios from "axios";
import { Hotel } from "../types/Hotel";

const API_BASE_URL = "http://localhost:5000/api";

export const getHotels = async (): Promise<Hotel[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotels`);
    if (!response.data || response.data.length === 0) {
      throw new Error("No hotels available.");
    }
    response.data.forEach((hotel: Hotel) => {
      if (
        !hotel.id ||
        !hotel.name ||
        !hotel.location ||
        !hotel.rooms ||
        !hotel.boardBasis
      ) {
        throw new Error("Invalid hotel data received from the API.");
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.message || "Failed to fetch hotels. Please try again later."
    );
  }
};

export const getHotelById = async (id: string): Promise<Hotel> => {
  try {
    if (!id || isNaN(Number(id)) || Number(id) <= 0) {
      throw new Error(
        "Invalid hotel ID. Please provide a valid positive number."
      );
    }

    const response = await axios.get(`${API_BASE_URL}/hotels/${id}`);
    if (!response.data) {
      throw new Error("Hotel not found.");
    }

    const hotel: Hotel = response.data;
    if (
      !hotel.id ||
      !hotel.name ||
      !hotel.location ||
      !hotel.rooms ||
      !hotel.boardBasis
    ) {
      throw new Error("Invalid hotel data received from the API.");
    }

    return hotel;
  } catch (error: any) {
    throw new Error(
      error.message || "Failed to fetch hotel details. Please try again later."
    );
  }
};
