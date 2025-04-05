import BlueButton from "@/app/components/blue-button";
import {logout} from "@/app/lib/actions/auth";
import LoggedBarMenuItem from "@/app/components/NavBar/logged-bar-menu-item";

export default function LoggedBar() {
    return <>
        <div>
            <LoggedBarMenuItem text='Home' link='/home' />
            <LoggedBarMenuItem text='Profile' link='/profile' />
        </div>
        <BlueButton text='Sign out' onClick={logout} />
    </>
}