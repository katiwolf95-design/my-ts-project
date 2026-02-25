import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function ThemeToggleButton() {

  const context = useContext(ThemeContext)

  if (!context) return null

  const { theme, setTheme } = context

  const nextTheme = theme === "light" ? "dark" : "light"

  return (
    <button onClick={() => setTheme(nextTheme)}>
      {theme === "light"
        ? "🌙"
        : "☀️"}
    </button>
  )
}
