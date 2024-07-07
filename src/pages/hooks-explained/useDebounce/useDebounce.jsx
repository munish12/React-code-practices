import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, ButtonGroup, Stack } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { UseDebounceCodeSnippet } from "./UseDebounceSnippet";
import { Audio, Oval } from "react-loader-spinner";
import SearchBar from "./searchBar";
import { fetchUsers, fakeUsers } from "./utils";
import useDebounce from "../../../hooks/useDebounce";

const UseDebounce = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      const fetchedUsers = await fetchUsers(debouncedSearch);
      setUsers(fetchedUsers);
      setIsLoading(false);
    };
    loadUsers();
  }, [debouncedSearch]);

  return (
    <>
      {isLoading && (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
        />
      )}
      <Stack direction="horizontal" gap={3} className="mx-auto">
        <div className="p-2">
          <h1 className="mb-4 text-2xl">UseDebounce</h1>
          <SearchBar onChange={setSearch} />
          {!isLoading && (
            <ul style={{ height: "500px", overflow: "auto" }}>
              {users.map((user) => {
                return <li key={user.id}>{user.name}</li>;
              })}
            </ul>
          )}
        </div>

        <div className="p-2">
          <SyntaxHighlighter language="javascript" style={dark}>
            {UseDebounceCodeSnippet.trim()}
          </SyntaxHighlighter>
        </div>
      </Stack>
    </>
  );
};

export default UseDebounce;
