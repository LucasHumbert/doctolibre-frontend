import {auth} from "@/auth";

export default async function Home() {
  const session = await auth()


  return <div>
    <h1>Hello { session?.user?.firstName } !</h1>
  </div>
}
