import Link from "next/link";

export default async function Home() {
  return <div>
    <div className='flex flex-row justify-between'>
      <h1>Calendar</h1>

      <div>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>Register</Link>
      </div>
    </div>

  </div>
}
