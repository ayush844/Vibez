export const formatDate = (isoString) => {
  const date = new Date(isoString);

  // Extract formatted time (HH:mm)
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24-hour format
  });

  // Extract formatted date (MMM DD, YYYY)
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return `${time} | ${formattedDate}`;
};
