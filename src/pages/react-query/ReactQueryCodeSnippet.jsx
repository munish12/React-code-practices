// UseStateCodeSnippet.js
export const ReactQueryCodeSnippet = `
// React query.jsx

import { ReactQueryCodeSnippet } from './ReactQueryCodeSnippet'
import {
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query'
import { addTodo, fetchTodos } from './api'
import TodoCard from './ToDoCard'


const ReactQuery = () => {
  const [showdemo, setShowDemo] = useState(true)
  const queryClient = useQueryClient()
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ['todos', { search }],
      // cacheTime: 0,
    staleTime: 0
  })

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  
  })

  if (isLoading) {
    return (
      <Oval
        visible={true}
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='oval-loading'
        wrapperStyle={{}}
        wrapperClass='loader'
      />
    )
  }

  return (
    <>
      <Button onClick={() => setShowDemo(!showdemo)}>Toogle Demo</Button>
      {showdemo && (
        <>
          <input onChange={e => setTitle(e.target.value)} value={title} />
          <Button
            onClick={async () => {
              try {
                console.log("Adding todo...");
                await addTodoMutation({ title })
                console.log("Todo added successfully");
                setTitle('')
              } catch (e) {
                console.error(e)
              } finally {
              }
            }}
          >
            Add Todo
          </Button>
          <ul>
            {todos.map(todo => {
              return <TodoCard key={todo.id} todo={todo} />
            })}
          </ul>
        </>
      )}
   
    </>
  )
}

export default ReactQuery


// APi.jsx
const todos = [
  {
    id: 1,
    title: "Learn HTML",
    completed: false,
  },
  {
    id: 2,
    title: "Learn CSS",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Javascript",
    completed: false,
  },
  {
    id: 4,
    title: "Learn React",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Next.js",
    completed: false,
  },
];

/**
 * Mock function that mimics fetching todos from a database.
 */
export const fetchTodos = async (query = "") => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("fetched todos");

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  // Uncomment the line below to trigger an error
  // throw new Error();

  return [...filteredTodos];
};

/**
 * Mock function that mimics adding a todo to a database.
 */
export const addTodo = async (todo) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  // Todo is stored in memory and cleared on page reload
  todos.push(newTodo);

  return newTodo;
};


// Todo card.jsx
import { useState } from "react";
export default function TodoCard({ todo }) {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <li>
      {todo.title}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </li>
  );
}

// App.js

import ReactQuery from './pages/react-query/ReactQuery'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App () {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      
    </QueryClientProvider>
  )
}

export default App


// 
`;
