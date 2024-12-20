export interface Room {
    roomType: string;
    amount: number;
  }
  
  export interface Hotel {
    id: number;
    name: string;
    location: string;
    rating: number;
    imageUrl: string;
    datesOfTravel: string[];
    boardBasis: string;
    rooms: Room[];
    price: number;
  }
  