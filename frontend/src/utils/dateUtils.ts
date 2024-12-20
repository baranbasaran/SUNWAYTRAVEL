import { format } from "date-fns";

export function formatDateRange(startDate: string, endDate: string): string {
  if (!startDate || !endDate) {
    return "Invalid date range";
  }

  try {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const sameMonth = start.getMonth() === end.getMonth();
    const sameYear = start.getFullYear() === end.getFullYear();

    if (sameMonth && sameYear) {
      // Same Month and Year
      return `${format(start, "d")}–${format(end, "d MMM")}`;
    } else if (sameYear) {
      // Different Months, Same Year
      return `${format(start, "d MMM")} – ${format(end, "d MMM")}`;
    } else {
      // Different Years
      return `${format(start, "d MMM yyyy")} – ${format(end, "d MMM yyyy")}`;
    }
  } catch (error) {
    console.error("Error formatting date range:", error);
    return "Invalid date range";
  }
}
