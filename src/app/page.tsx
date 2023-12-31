import CharacterCard from '@/components/CharacterCard'
import Navbar from '@/components/Navbar';
import { getCharacters, orderCharacters } from '@/utils/api'
import Image from 'next/image'
import Link from 'next/link';



export default async function Home() {
  const characters = await getCharacters();
  const order = await orderCharacters();
  

  return (
    <main className='bg-white h-screen flex flex-col items-center px-20'>
      <header>
      <div className='w-auto flex flex-col justify-center text-center h-auto'>
        <div className='flex justify-center'>
          <Link href='/'>
            <Image width={300} height={300} src="/assets/logo/Group.png" alt="Logo" layout="fixed"/>
          </Link>
        </div>
        <h1 className='font-sans text-3xl font-bold mt-6'>EXPLORE O UNIVERSO</h1>
        <p className='mt-2'>Mergulhe no domínio Deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
      </div>
      </header>
      <div className="mt-20 w-2/3 flex justify-center">
        <Navbar />
      </div>
      <div className="grid place-items-center mt-20 w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {characters.results.map((character) => (
          <CharacterCard key={character.id} character={character}/>
        ))}
      </div>
      {/* <div className="grid place-items-center mt-20 w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {order.results.map((character) => (
          <CharacterCard key={character.id} character={character}/>
        ))}
      </div> */}
    </main>

  )
}
