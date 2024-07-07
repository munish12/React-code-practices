import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Usestate from "./pages/hooks-explained/useState/Usestate";
import UseEffect from "./pages/hooks-explained/useEffect/UseEffect";
import UseMemo from "./pages/hooks-explained/useMemo/UseMemo";
import UseCallback from "./pages/hooks-explained/useCallback/UseCallback";
import UseContext from "./pages/hooks-explained/useContext/UseContext";
import UseRef from "./pages/hooks-explained/useRef/useRef";
import UseReducer from "./pages/hooks-explained/useReducer/useReducer";
import DataFetching from "./pages/hooks-explained/dataFetching/dataFetching";
import UseDebounce from "./pages/hooks-explained/useDebounce/useDebounce";
import ReactQuery from "./pages/react-query/ReactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Counter from "./pages/redux-example/counter";
import ParentComponent from "./pages/hooks-explained/useImperativeHandling/ParentComponent";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/admin-dashboard/Dashboard";
import theme from "./theme/theme";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router basename="/React-code-practices">
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/useState" element={<Usestate />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/useCallback" element={<UseCallback />} />
            <Route path="/useContext" element={<UseContext />} />
            <Route path="/UseRef" element={<UseRef />} />
            <Route path="/UseReducer" element={<UseReducer />} />
            <Route path="/data-fetching" element={<DataFetching />} />
            <Route path="/UseDebounce" element={<UseDebounce />} />
            <Route
              path="/UseImperativeHandling"
              element={<ParentComponent />}
            />
            <Route path="/reactQuery" element={<ReactQuery />} />
            <Route path="/redux-example" element={<Counter />} />
            <Route
              path="/admin-dashboard/posts"
              element={<Dashboard type="posts" />}
            />
            <Route
              path="/admin-dashboard/comments"
              element={<Dashboard type="comments" />}
            />
            <Route
              path="/admin-dashboard/albums"
              element={<Dashboard type="albums" />}
            />
            <Route
              path="/admin-dashboard/photos"
              element={<Dashboard type="photos" />}
            />
            <Route
              path="/admin-dashboard/todos"
              element={<Dashboard type="todos" />}
            />
            <Route
              path="/admin-dashboard/users"
              element={<Dashboard type="users" />}
            />
          </Routes>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
