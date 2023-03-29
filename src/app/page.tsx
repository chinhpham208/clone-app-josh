import Image from 'next/image'
import { Inter } from 'next/font/google'
import Paragraph from '@/components/ui/Paragraph'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-900'>
     <Paragraph size='sm'/>
    </main>
  )
}
