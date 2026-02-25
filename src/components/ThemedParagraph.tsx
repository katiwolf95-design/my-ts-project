import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import type { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function ThemedParagraph({ children }: Props) {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("ThemedParagraph must be used inside ThemeProvider")
    }

    const { theme } = context
    
    const themes = {
        light: "text-black",
        dark: "text-white"
    }

    return (
        <p className={themes[theme]}>
            {children}
        </p>
    )
}