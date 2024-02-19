export const initialItems = new Array(29_999_999).fill(null).map((_, i) => (
    {
    id: i, // Ensure each item has a unique ID
    isSelected: i === 29_999_998 // This will only select the last item initially; adjust as needed
  }
  ));
  