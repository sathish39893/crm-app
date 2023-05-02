import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Login } from './login'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>In Main Page</div>
      <Login />
    </main>
  )
}
