import Image from 'next/image';
import { Inter } from 'next/font/google';
import Notes from './components/Notes';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
           
      <Notes/>

    </main>
  )
}
