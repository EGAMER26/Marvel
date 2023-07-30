'use client';

import Image from 'next/image'
import {useRouter} from 'next/navigation';
import {FC, KeyboardEvent, useState} from 'react';


const Navbar: FC = () => {
  const router = useRouter();
  const [querySearch, setquerySearch] = useState<string>('');

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter' && querySearch.trim() !== '') {
        setquerySearch('');
        router.push(`/search?query=${querySearch}`);

        
    }
  }

  return <section className='flex gap-5 w-full relative h-16 items-center z-10'>
  <Image width={34} height={24} className='h-6 w-6 absolute left-6' src="/assets/busca/Lupa/Shape@2x.png" alt="lupa" />
    <input type="text" className='h-16 w-full min-w placeholder-red-500 bg-red-200 pl-20 focus:outline-red-600 outline-none rounded-full' 
    placeholder='Procure por heróis' 
    name="search" 
    value={querySearch}
    onChange={(e => setquerySearch(e.target.value))}
    onKeyDown={handleSearch}
    />
  </section>
}

export default Navbar