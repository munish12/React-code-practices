export const useLocalStorage = (key) => {
  const setItem = (value) => {
    try {
      console.log("Saving object to localStorage:", value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item) : undefined;
      console.log("Retrieved object from localStorage:", parsedItem); // Log the parsed object
      return parsedItem;
    } catch (error) {
      console.log(error);
    }
  };


  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return { setItem, getItem, removeItem };
};
