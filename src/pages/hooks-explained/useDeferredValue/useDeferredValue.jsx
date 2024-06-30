import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Button, ButtonGroup, Stack } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { UseDeferredValueCodeSnippet } from "./useDeferredValueCodeSnippet";

const UseDeferredValue = () => {
  const [filter, setFilter] = useState("");
  const deferredFilter = useDeferredValue(filter);

  // Log the current and deferred filter values to see how they update
  console.log("Current filter value:", filter);
  console.log("Deferred filter value:", deferredFilter);

  // Example large list of items (simplified for demonstration)
  const largeList = [
    "apple",
    "banana",
    "orange",
    "mango",
    "lemon",
    "lime",
    "pear",
    "grape",
    "peach",
    "plum",
  ];

  const list = useMemo(() => {
    // Simulate a computationally expensive operation
    for (let i = 0; i < 1e6; i++) {
      // This loop doesn't do anything but delay the filtering operation
    }
    return largeList.filter((item) =>
      item.toLowerCase().includes(deferredFilter.toLowerCase())
    );
  }, [deferredFilter]);

  return (
    <>
      <Stack direction="horizontal" gap={3} className="mx-auto">
        <div className="p-2">
          <p>
            <b>useDeferredValue</b> is a hook introduced in React 18 as part of
            its Concurrent Features. It allows you to defer the update of a
            non-urgent value so that React can prioritize more important updates
            first, like user inputs, and thus keep the interface responsive.
            This hook is useful for optimizing the performance of your React
            application, especially in scenarios where you have expensive
            operations (like filtering or sorting large datasets) that do not
            need to be updated immediately in response to user interactions. How
            useDeferredValue Works When you pass a value to useDeferredValue,
            React returns a new copy of this value that may "lag behind" the
            original one. Updates to this deferred value are scheduled with
            lower priority compared to other updates, like user input events.
            This means that if the browser is busy processing something more
            important, updating the deferred value can wait, preventing the UI
            from becoming sluggish. Example Usage Let's consider a simple
            example where you have an input field used for filtering a large
            list of items. Typing in the input field should feel responsive,
            even though filtering the list according to the input might take
            some time due to the list's size. In this example: State and
            Deferred State: The filter state holds the current value of the
            input field. useDeferredValue is used to create a deferred version
            of this value, deferredFilter, which updates at a lower priority.
            Filtering with useMemo: The list is filtered using useMemo to
            memoize the result and avoid recalculating it on every render. The
            deferredFilter is used as the dependency, ensuring that the list is
            only re-filtered when the deferred value changes. Responsive Input:
            Because the filtering operation uses the deferred value, updating
            the input field remains fast and responsive, even as the filtering
            operation lags slightly behind to maintain performance. Conclusion
            useDeferredValue is a powerful tool for optimizing React
            applications, allowing you to keep the UI responsive by deferring
            updates to values that do not require immediate feedback. It's
            particularly useful in scenarios where maintaining smooth user
            interactions is crucial, even when dealing with computationally
            expensive operations in the background.
          </p>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Type to filter..."
          />
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="p-2">
          <SyntaxHighlighter language="javascript" style={dark}>
            {UseDeferredValueCodeSnippet.trim()}
          </SyntaxHighlighter>
        </div>
      </Stack>
    </>
  );
};

export default UseDeferredValue;
