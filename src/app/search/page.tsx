'use client'
import CharacterCard from '@/components/CharacterCard';
import Navbar from '@/components/Navbar';
import Allnav from '@/components/Allnav';
import Loading from '@/components/loading';
import { Character } from '@/types/marvels';
import { searCharacters } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
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
  return <main className='px-20'>
    <Allnav />
    
      <div className="mt-10">Resultado <span>&quot;{querySearch}&quot;</span></div>
        {
          isLoading ? <div className='w-full h-full flex justify-center items-center'>
            <div className="w-full h-full flex justify-center items-center"><Loading /></div>
          </div> : (
              <div className="grid place-items-center mt-10 w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character}/>
          ))}
        </div>
          )
        }
    </main>
}

export default SearchPage;