// UseStateCodeSnippet.js
export const UseContextCodeSnippet = `

// UseContext.jsx or Starting/Index file
const UseContext = () => {
  const user = { name: 'John Doe', email: 'john@example.com' } // Example user object
  return (
    <>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </>
  )
}

export default UseContext


// Context.js
import React, { createContext, useContext } from 'react'
const defaultUserValue = undefined; // or set an initial User object

export const DashboardContext = createContext(defaultUserValue);

export function useUserContext () {
  const user = useContext(DashboardContext)
  if (user === undefined) {
    throw new Error('useUserContext must be use with DashboardContext')
  }
  return user
}

// Dashboard.jsx
import React from 'react'
import { Navbar, Profile } from './components'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Profile />
    </div>
  )
}

export default Dashboard

// Component.jsx
import React from 'react'
import { useUserContext } from './context'

export const Navbar = () => {
  const user = useUserContext() // This will either return the user object or throw an error if used outside a provider
  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription email: {user.email}</div>
    </div>
  )
}

export const Profile = () => {
  const user = useUserContext()
  return <div>{user.name}</div>
}


`;
