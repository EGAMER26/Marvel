'use client'
import Navbar from '@/components/Navbar';
import { Character } from '@/types/marvels';
import { searCharacters } from '@/utils/api';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react'

  

const SearchPage: FC= () => {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get('query');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(characters);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await searCharacters(querySearch);
        setCharacters(data.results);
      } catch(error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    if(querySearch) {
      fetchData();
    }
  }, [querySearch]);
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