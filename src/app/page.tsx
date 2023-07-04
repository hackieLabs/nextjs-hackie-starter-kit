import { cn } from '@/lib/utils'
import { Krona_One } from 'next/font/google'

const inter = Krona_One({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <main>
      <h1 className={cn('text-2xl', inter.className)}>hackie - Nextjs Template</h1>
    </main>
  )
}
