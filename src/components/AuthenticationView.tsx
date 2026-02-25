import { useState } from "react"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

export default function AuthenticationView() {

    const [isLoginMode, setIsLoginMode] = useState(true)

    return (
        <div className="flex flex-col items-center gap-6 p-6">

            <h1 className="text-2xl font-bold text-white">
                {isLoginMode ? "Login" : "Register"}
            </h1>

            {isLoginMode ? <LoginForm /> : <RegisterForm />}

            {/** Umschalt-Button */}
            <button
                type="button"
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-blue-400 hover:underline"
            >
                {isLoginMode
                    ? "No account? Register"
                    : "Already registered? Login"}
            </button>
            
        </div>
    )
}