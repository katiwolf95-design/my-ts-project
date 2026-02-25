import { createContext, useState } from "react";
import type { ReactNode } from "react"

//Typ für Context-Daten
type UserContextType = {
    user: string | null
    setUser: (user: string | null) => void
}

//Context erstellen (Default: undefined -> safer in TS)
export const UserContext = createContext<UserContextType | undefined>(undefined)

//Props Typ Provider
type Props = {
    children: ReactNode
}

//Provider Component
export function UserProvider({ children }: Props) {

    const [user, setUser] = useState<string | null>("Katharina")

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
