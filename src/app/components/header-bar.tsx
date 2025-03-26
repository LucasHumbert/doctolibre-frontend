import Link from "next/link";
import {auth} from "@/auth";
import SignOutBtn from "@/app/components/sign-out-btn";

export default async function HeaderBar() {
    const session = await auth()

    return <div className="w-full py-4 px-2 mb-2 bg-blue-300 flex justify-between items-center">
        <Link href='/'>Doctolibre</Link>

        { session?.user ? (
            <div>
                <Link href='/profile'>{ session.user.firstName } {session.user.lastName}</Link>
                <SignOutBtn>Sign out</SignOutBtn>
            </div>
        ) : (
            <div>
                <Link href='/login'>
                    <button
                        className="text-white bg-indigo-500 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Login
                    </button>
                </Link>
            </div>
        )}
    </div>
}