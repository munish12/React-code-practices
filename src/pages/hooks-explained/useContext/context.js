import { createContext, useContext } from 'react'
const defaultUserValue = undefined; // or set an initial User object

export const DashboardContext = createContext(defaultUserValue);

export function useUserContext () {
  const user = useContext(DashboardContext)
  if (user === undefined) {
    throw new Error('useUserContext must be use with DashboardContext')
  }
  return user
}
