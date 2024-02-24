// UseStateCodeSnippet.js
export const UseDebounceCodeSnippet = `
// Index file
const [isLoading, setIsLoading] = useState(false)
const [search, setSearch] = useState("")
const [users, setUsers] = useState([])
const debouncedSearch = useDebounce(search);

useEffect(() => {
  const loadUsers = async () => {
    setIsLoading(true)
    const fetchedUsers = await fetchUsers(debouncedSearch)
    setUsers(fetchedUsers)
    setIsLoading(false)
  }
  loadUsers()
}, [debouncedSearch])

return (
  <>
    {isLoading && (
      <Oval
        visible={true}
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='oval-loading'
        wrapperStyle={{}}
        wrapperClass='loader'
      />
    )}
    <Stack direction='horizontal' gap={3} className='mx-auto'>
      <div className='p-2'>
        <h1 className='mb-4 text-2xl'>UseDebounce</h1>
        <SearchBar onChange={setSearch} />
        {!isLoading && (
          <ul style={{ height: '500px', overflow: 'auto' }}>
            {users.map(user => {
              return <li key={user.id}>{user.name}</li>
            })}
          </ul>
        )}
      </div>
    </Stack>
  </>
)
}

export default UseDebounce

// Custom hook use debounce.js
import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}

export default useDebounce


// Faker backend api to get the users
import { faker } from '@faker-js/faker';

export const fakeUsers = Array(1000)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: faker.person.fullName(),
  }));

// Fake function mocking an api
export const fetchUsers = async (searchedUsers) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fakeUsers.filter((user) =>
    user.name.includes(searchedUsers),
  );
};

// Simple HTML element to search the usersimport React from 'react'

const SearchBar = ({onChange}) => {
  return (
    <input
      type='text'
      onChange={e => onChange(e.target.value)}
      placeholder='Search users'
    />
  )
}

export default SearchBar



`;
