import React, { useRef } from "react";
import UseImperativeHandling from "./UseImperativeHandling";
import { Button } from "react-bootstrap";

const ParentComponent = () => {
    // Create a ref for the Counter component
  const counterRef = useRef(null);

  // Function to reset the counter
  const handleReset = () => {
    if (counterRef.current) {
      counterRef.current.reset();
    }
  };
  console.log("counterRef", counterRef);

  return (
    <>
      <Button onClick={handleReset}>Reset Counter</Button>
      <UseImperativeHandling ref={counterRef} />
    
    </>
  );
};

export default ParentComponent;
