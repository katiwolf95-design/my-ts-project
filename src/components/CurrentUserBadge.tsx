import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function CurrentUserBadge() {

    const context = useContext(UserContext)

    //Safety check für TS
    if (!context) {
        throw new Error("CurrentUserBadge must bi used inside UserProvider")
    }

    const { user } = context

    return (
        <div>
            {user ? `Logged in as: ${user}`: "Nobody logged in"}
        </div>
    )
}