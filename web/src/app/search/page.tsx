import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { FC } from 'react'

interface SearchPageProps {
  
}

const SearchPage: FC<SearchPageProps> = ({}) => {
  return <main>
    <nav className='flex gap-24 pl-20 items-center'>
    <Image height={0} width={400} className='h-20' src="/assets/logo/Group@3x.png" alt='logo'/>
    <div>
      <Navbar />
    </div>
    </nav>
    </main>
}

export default SearchPage;