import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">This Is The Nested Page</h1>
      <Link href="/" className='underline text-blue-700'>Home Page</Link>
    </main>
  )
}
