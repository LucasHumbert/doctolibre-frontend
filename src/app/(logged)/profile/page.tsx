import {auth} from "@/auth";

export default async function ProfilePage() {
    const session = await auth()
    console.log(session)

    return <div>
        <h1>Profile</h1>
        <p>Firstname: {session?.user?.firstName}</p>
        <p>Lastname: {session?.user?.lastName}</p>
        <p>Email: {session?.user?.email}</p>
    </div>
}