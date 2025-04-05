import BlueButton from "@/app/components/blue-button";
import {logout} from "@/app/lib/actions/auth";
import LoggedBarMenuItem from "@/app/components/NavBar/logged-bar-menu-item";

export default function LoggedBar() {
    return <>
        <div className='mb-3 sm:mb-0'>
            <LoggedBarMenuItem text='Home' link='/home' />
            <LoggedBarMenuItem text='Profile' link='/profile' />
        </div>
        <div className='mb-2 sm:mb-0'>
            <BlueButton text='Sign out' onClick={logout} />
        </div>
    </>
}