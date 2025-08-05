import { useState, type ReactNode, useEffect } from "react";
import type { UserInterface } from "../types/user.interface";
import { fetchData } from "../utils/api";
import { AppContext } from "../context/AppContext";

interface ProviderProps {
	children: ReactNode
}

const Provider = ({children}: ProviderProps) => {
	const [users, setUsers] = useState<UserInterface[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        const data = await fetchData()
        setUsers(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getUsers()
  }, [])

  return (
    <AppContext.Provider value={{ users, loading, error }}>
      {children}
    </AppContext.Provider>
  )
};

export default Provider;