import api from "../ api";

export const fetchData =
  (endpoint, requestType, successType, failureType) => async (dispatch) => {
    dispatch({ type: requestType });

    try {
      const response = await api.get(endpoint);
      dispatch({ type: successType, payload: response.data });
    } catch (error) {
      dispatch({ type: failureType, payload: error.message });
    }
  };

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
