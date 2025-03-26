import { signIn } from "@/auth"

export default function LoginPage() {
    return <form
        action={async (formData) => {
            "use server"
            formData.append('redirectTo', '/');
            await signIn("credentials", formData)
        }}

        className='w-1/3 m-auto'
    >
        <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 ">Email</label>
            <input type="email" id="email" name="email"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   required/>
        </div>

        <div className='mt-3'>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 ">Password</label>
            <input type="password" id="password" name="password"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   required/>
        </div>

        <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 cursor-pointer'>Connect</button>
    </form>
}