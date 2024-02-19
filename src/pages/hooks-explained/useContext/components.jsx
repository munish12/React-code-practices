import React from 'react'
import { useUserContext } from './context'

export const Navbar = () => {
  const user = useUserContext() // This will either return the user object or throw an error if used outside a provider
  console.log(user);
  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  )
}

export const Profile = () => {
  const user = useUserContext()
  return <div>Name: {user.name}</div>
}
