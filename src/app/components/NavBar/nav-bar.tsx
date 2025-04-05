import Link from "next/link";
import {auth} from "@/auth";
import BlueButton from "@/app/components/blue-button";
import LoggedBar from "@/app/components/NavBar/logged-bar";

export default async function NavBar() {
    const session = await auth()

    return <>
        <div className="w-full sm:h-16 px-3 flex flex-col sm:flex-row justify-between items-center">
            <Link
                href={session?.user ? '/home' : '/'}
                className='text-3xl text-blue-500 my-3 sm:my-0'
            >
                Calendar
            </Link>

            { session?.user ? (
                <LoggedBar />
            ) : (
                <div className='mb-3 sm:mb-0'>
                    <Link href='/register' className='mr-2'>
                        <BlueButton text='Register' />
                    </Link>
                    <Link href='/login'>
                        <BlueButton text='Login' />
                    </Link>
                </div>
            )}
        </div>
        <div className='bg-blue-500 h-0.5 mx-3'></div>
    </>

}