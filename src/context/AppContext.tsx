import { createContext } from 'react'
import type { UserInterface } from '../types/user.interface'

interface AppContextInterface {
  users: UserInterface[]
  loading: boolean
  error: string | null
}

const initialState: AppContextInterface = {
  users: [],
  loading: false,
  error: null
}

export const AppContext = createContext<AppContextInterface>(initialState)
