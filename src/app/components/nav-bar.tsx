import Link from "next/link";
import {auth} from "@/auth";
import SignOutBtn from "@/app/components/sign-out-btn";

export default async function NavBar() {
    const session = await auth()

    return <nav className="h-screen w-64 bg-blue-300">
        <Link href='/' className='text-3xl text-white'>Calendar</Link>

        { session?.user ? (
            <div>
                <Link href='/profile'>{ session.user.firstName } {session.user.lastName}</Link>
                <SignOutBtn>Sign out</SignOutBtn>
            </div>
        ) : (
            <div>
                <Link href='/login'>
                    <button
                        className="cursor-pointer text-white bg-indigo-500 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Login
                    </button>
                </Link>
            </div>
        )}
    </nav>
}