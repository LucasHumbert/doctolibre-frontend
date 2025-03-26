import Link from "next/link";
import {auth} from "@/auth";
import SignOutBtn from "@/app/components/sign-out-btn";

export default async function Home() {
  const session = await auth()


  return <div>
    <h1>Hello { session?.user?.firstName } !</h1>
  </div>
}
