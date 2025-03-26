import {auth} from "@/auth";

export default async function ProfilePage() {
    const session = await auth()

    return <div>
        <h1>Profile</h1>
        <p>Email: {session?.user?.email}</p>
    </div>
}