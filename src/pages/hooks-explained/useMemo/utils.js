export const initialItems = new Array(100).fill(null).map((_, i) => (
    {
    id: i, // Ensure each item has a unique ID
    isSelected: i === 99 // This will only select the last item initially; adjust as needed
  }
  ));
  