import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type RegisterFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const registerSchema = yup.object({
    firstName: yup.string().required("First name required"),
    lastName: yup.string().required("Last name required"),
    email: yup.string().email("Invalid email").required("Email required"),
    password: yup.string().min(6).required("Password required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm password required"),
})

export default function RegisterForm() {

    const [submittedData, setSubmittedData] =
        useState<RegisterFormValues | null>(null)
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormValues>({
        resolver: yupResolver(registerSchema),
    })

    const onSubmit = (data: RegisterFormValues) => {
        setSubmittedData(data)
    }

    const inputField = (
        name: keyof RegisterFormValues,
        placeholder: string,
        type: string = "text"
    ) => (

        <div className="flex flex-col text-sm w-full">

            <input 
                {...register(name)}
                placeholder={placeholder}
                type={type}
                className="px-4 py-2 rounded-lg border border-gray-600 w-full bg-gray-700"
            />

            {errors[name] && (
                <p className="text-red-500">
                    {errors[name]?.message as string}
                </p>
            )}

        </div>
    )

    return (
        <div className="flex flex-col gap-4 w-full items-center">
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 w-80"
            >
                {inputField("firstName","First Name")}
                {inputField("lastName","Last Name")}
                {inputField("email","Email","email")}
                {inputField("password","Password","password")}
                {inputField("confirmPassword","Confirm Password","password")}

                <button className="bg-blue-600 text-white p-2 rounded">
                    Register
                </button>
            </form>

            {submittedData && (
                <code className="
                    block w-full max-w-md p-3 rounded bg-gray-700 
                    text-green-400 text-sm overflow-auto"
                >
                    {JSON.stringify(submittedData, null, 2)}
                </code>
            )}

        </div>
    )
}