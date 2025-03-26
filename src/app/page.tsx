import Link from "next/link";
import {auth} from "@/auth";
import SignOutBtn from "@/app/components/sign-out-btn";

export default async function Home() {
  const session = await auth()

  if (session?.user) {
    return <div>
      <p>You are signed in as {session.user?.email}</p>
      <SignOutBtn />
    </div>
  }

  return <div>
    <p>You are not signed in</p>
    <Link href={'/login'}>Log In</Link>
  </div>
}
