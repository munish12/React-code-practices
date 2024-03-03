import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { UseImperativeHandlingCodeSnippet } from "./UseImperativeHandlingCodeSnippet";

const UseImperativeHandling = ((props,ref) => {
  const [count, setCount] = useState(0);

  const resetCounter = () => {
    setCount(0);
  };

  // Expose the resetCounter function to the parent component

  useImperativeHandle(ref, () => ({
    reset: resetCounter,
  }));
  console.log("ref", ref);

  return (
    <>
      <h4>
        The useImperativeHandle hook is a React hook used to customize the
        instance value that is exposed when using ref with React components. It
        allows you to specify which functions or values should be accessible
        from the parent component when using the ref attribute.
      </h4>
      <h1>Count: {count}</h1>
      <ButtonGroup size="lg" aria-label="Basic example">
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      </ButtonGroup>
      <SyntaxHighlighter language="javascript" style={dark}>
        {UseImperativeHandlingCodeSnippet.trim()}
      </SyntaxHighlighter>
    </>
  );
});

export default forwardRef (UseImperativeHandling);
