import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { UseLocalStorageCodeSnippet } from "./UseLocalStorageCodeSnippet";
import { useLocalStorage } from "./CustomHooks";

const UseLocalStorage = () => {
  const [value, setValue] = useState("");
  const { getItem, setItem, removeItem } = useLocalStorage("value");
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">useLocalStorage</h1>
      <p>
        The useLocalStorage hook is a custom React hook that provides a
        convenient interface for reading from and writing to the browser's
        localStorage. This hook enables you to persist state across browser
        sessions, making it ideal for scenarios like saving user preferences,
        themes, or any stateful information that you want to preserve when a
        user leaves your page and returns later.
      </p>
      <input
        className="mb-4"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-row gap-4">
        <button onClick={() => setItem(value)}>Set</button>
        <button onClick={() => console.log(getItem())}>Get</button>
        <button onClick={removeItem}>Remove</button>
      </div>

      <SyntaxHighlighter language="javascript" style={dark}>
        {UseLocalStorageCodeSnippet.trim()}
      </SyntaxHighlighter>
    </>
  );
};

export default UseLocalStorage;
