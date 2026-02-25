import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserLoginButton() {

    const context = useContext(UserContext)
    if (!context) throw new Error("UserLoginButton must be inside UserProvider")

    const { user, setUser } = context

    function toggleUser() {
        setUser(user ? null : "Katharina")
    }

    return (
        <button onClick={toggleUser}>
            {user ? "Logout" : "Login as Katharina"}
        </button>
    )
}