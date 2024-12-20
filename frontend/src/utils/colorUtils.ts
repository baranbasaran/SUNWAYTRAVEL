export const getBoardBasisColor = (boardBasis: string): string => {
  switch (boardBasis) {
    case "All Inclusive":
      return "bg-green-500";
    case "Bed & Breakfast":
      return "bg-blue-500";
    case "Room Only":
      return "bg-gray-500";
    case "Half Board":
      return "bg-orange-500";
    case "Full Board":
      return "bg-purple-500";
    case "Self Catering":
      return "bg-yellow-500";
    default:
      return "bg-gray-300";
  }
};
