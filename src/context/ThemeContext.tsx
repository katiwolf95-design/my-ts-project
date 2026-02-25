import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { useEffect } from "react";

type Theme = "light" | "dark"

type ThemeContextType = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type Props = {
    children: ReactNode
}

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(() => {
        document.body.dataset.theme = theme
    }, [theme]) 

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}