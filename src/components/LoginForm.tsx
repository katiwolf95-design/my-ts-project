import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type LoginFormValues = {
    email: string
    password: string
}

const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email required"),
    password: yup.string().required("Password required"),
})

export default function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormValues>({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: LoginFormValues) => {
        console.log("LOGIN DATA:", data)
        alert("Login submitted!")
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 w-80"
        >
            <div className="flex flex-col gap-1">
                <input 
                    {...register("email")}
                    placeholder="Email"
                    type="email"
                    className="p-2 rounded border border-gray-500 bg-gray-700 text-white"
                />
                {errors.email && (
                    <p className="text-red-400 text-sm">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register("password")}
                    placeholder="Password"
                    type="password"
                    className="p-2 rounded border border-gray-500 bg-gray-700 text-white"
                />
                {errors.password && (
                    <p className="text-red-400 text-sm">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <button className="bg-blue-600 text-white p-2 rounded">
                Login
            </button>
            
        </form>
    )
}