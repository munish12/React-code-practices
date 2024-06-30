// UseStateCodeSnippet.js
export const UseDeferredValueCodeSnippet = `
const UseDeferredValue = () => {
  const [filter, setFilter] = useState();
  const defferedFilter = useDeferredValue(filter);

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
    return largeList.filter((item) => item.includes(filter));
  }, [defferedFilter]);

  return (
    <>
      <Stack direction="horizontal" gap={3} className="mx-auto">
        <div className="p-2">
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

`
