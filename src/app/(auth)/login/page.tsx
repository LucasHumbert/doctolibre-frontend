import Link from "next/link";
import AuthInput from "@/app/components/auth-input";
import {login} from "@/app/lib/actions/auth";

export default function LoginPage() {
    return <form
        action={async (formData) => {
            "use server"
            await login(formData)
        }}
        className='flex flex-col items-center w-[95%] sm:w-[500px] mt-12 m-auto p-5 bg-white border border-gray-200 rounded-lg shadow-sm'
    >
        <AuthInput name='email' label='Email' type='email' required />

        <AuthInput name='password' label='Password' type='password' required />

        <button type='submit' className='w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 cursor-pointer'>Connect</button>

        <Link href={'/register'} className='underline hover:text-blue-500 hover:no-underline'>Create account</Link>
    </form>
}