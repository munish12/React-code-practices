import React, { useReducer } from "react";
import { Alert, Button } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { UseReducerCodeSnippet } from "./useReducerCodeSnippet";

// We define a reducer function that takes the current state and an action as parameters and returns a new state based on the action type. The action type determines how the state should be updated. In this case, the actions are increment, decrement, and reset.
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "maximun limit reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "minimum limit reached" : null,
      };
    }
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const UseReducer = () => {
  // We define a functional component named UseReducer. Within this component, we use the useReducer hook to manage state. We pass in the reducer function that we defined above, as well as the initial state { count: 0 }.
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
  return (
    <>
      <h4>
        In React, the useReducer hook is a powerful tool for managing state in a
        more predictable and centralized way, especially when dealing with
        complex state logic in your components. It's an alternative to useState
        that offers more flexibility and control, particularly for managing
        state transitions that depend on the previous state. <br />
        Here's how useReducer works and an example to illustrate its usage:
        <br /> How useReducer Works:
        <br /> Reducer Function: At the heart of useReducer is a reducer
        function. This function takes the current state and an action, and
        returns a new state based on that action. It follows the (state, action)
        => newState pattern.
        <br /> Dispatch Function: Instead of directly setting the state like
        with useState, you dispatch actions to the reducer. These actions are
        plain JavaScript objects that describe what should change in the state.
        The reducer function interprets these actions and computes the new state
        accordingly.
      </h4>
      <div>
        <h1>Count: {state.count}</h1>
        {state.error && <Alert variant="danger">{state.error}</Alert>}
        <Button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </Button>
        <Button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
      </div>
      <SyntaxHighlighter language="javascript" style={dark}>
        {UseReducerCodeSnippet.trim()}
      </SyntaxHighlighter>
    </>
  );
};

export default UseReducer;
