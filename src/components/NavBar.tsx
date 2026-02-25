import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import CurrentUserBadge from "./CurrentUserBadge";

export default function NavBar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                borderBottom: "1px solid #ccc"
            }}
        >
            {/* LEFT SIDE */}
            <div style={{ display: "flex", gap: "12px" }}>
                <Link to="/">Home</Link>
                <Link to="/auth">Auth</Link>
            </div>

            {/* RIGHT SIDE */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <ThemeToggleButton />
                <CurrentUserBadge />
            </div>
        </nav>
    )
}