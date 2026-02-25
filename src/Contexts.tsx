import CurrentUserBadge from "./components/CurrentUserBadge";
import ThemedParagraph from "./components/ThemedParagraph";
import ThemeToggleButton from "./components/ThemeToggleButton";
import UserLoginButton from "./components/UserLoginButton";

export default function Contexts() {
    return (
        <div className="p-4 space-y-4">
            
            <ThemeToggleButton />
            <UserLoginButton />
            
            <CurrentUserBadge />

            <ThemedParagraph>
                This paragraph reacts to the theme.
            </ThemedParagraph>
        </div>
    )
}

