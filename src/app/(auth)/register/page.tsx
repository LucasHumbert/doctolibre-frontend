'use client'

import Link from "next/link";
import AuthInput from "@/app/components/auth-input";
import {register} from "@/app/lib/actions/auth";
import {useActionState} from "react";

export default function RegisterPage() {
    const [state, action, pending] = useActionState(register, undefined)

    return <form
        action={action}
        className='flex flex-col items-center w-[95%] sm:w-[500px] mt-12 m-auto p-5 bg-white border border-gray-200 rounded-lg shadow-sm'
    >
        <AuthInput
            name='firstname'
            label='Firstname'
            type='text'
            defaultValue={state?.values?.firstname.toString() || ''}
        >
            {state?.errors?.firstname && <p>{state.errors.firstname}</p>}
        </AuthInput>

        <AuthInput
            name='lastname'
            label='Lastname'
            type='text'
            defaultValue={state?.values?.lastname.toString() || ''}
        >
            {state?.errors?.lastname && <p>{state.errors.lastname}</p>}
        </AuthInput>

        <AuthInput
            name='email'
            label='Email'
            type='text'
            defaultValue={state?.values?.email.toString() || ''}
        >
            {state?.errors?.email && <p>{state.errors.email}</p>}
        </AuthInput>

        <AuthInput
            name='password'
            label='Password'
            type='password'
            defaultValue={state?.values?.password.toString() || ''}
        >
            {state?.errors?.password && (
                <div>
                    <p>Password must:</p>
                    <ul>
                        {state.errors.password.map((error) => (
                            <li key={error}>- {error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </AuthInput>
        <AuthInput
            name='confirm_password'
            label='Confirm password'
            type='password'
            defaultValue={state?.values?.confirm_password.toString() || ''}
        >
            {state?.errors?.confirm_password && <p>{state.errors.confirm_password}</p>}
        </AuthInput>

        <button disabled={pending} type='submit' className='w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 cursor-pointer'>Register</button>

        <Link href={'/login'} className='underline hover:text-blue-500 hover:no-underline'>Log In</Link>
    </form>
}