import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">This Is Tha Home Page</h1>
      <Link href="/nested" className='underline text-blue-700'>Nested Page</Link>
    </main>
  )
}
