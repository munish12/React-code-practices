// UseStateCodeSnippet.js
export const useStateCodeSnippet = `
import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Usestate = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <ButtonGroup size='lg' aria-label='Basic example'>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      </ButtonGroup>
    </>
  );
};

export default Usestate;
`;
