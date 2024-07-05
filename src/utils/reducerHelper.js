const handleFetchRequest = (state, key) => {
  return {
    ...state,
    [key]: { ...state[key], loading: true, error: null },
  };
};

const handleFetchSuccess = (state, key, payload) => {
  return {
    ...state,
    [key]: { data: payload, loading: false, error: null },
  };
};

const handleFetchFailure = (state, key, error) => {
  return {
    ...state,
    [key]: { ...state[key], loading: false, error },
  };
};

export { handleFetchRequest, handleFetchSuccess, handleFetchFailure };
