import CharacterCard from '@/components/CharacterCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-white h-screen flex flex-col items-center'>
      <header>
      <div className='w-auto flex flex-col justify-center text-center h-auto'>
        <div className='flex justify-center'>
          <Image width={300} height={300} src="/assets/logo/Group.png" alt="Logo" layout="fixed"/>
        </div>
        <h1 className='font-sans text-3xl font-bold mt-6'>EXPLORE O UNIVERSO</h1>
        <p className='mt-2'>Mergulhe no domínio Deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
      </div>
      </header>
      <section className='flex gap-5 w-2/3 mt-20 h-16 text-red-700 items-center'>
      <Image width={34} height={24} className='h-7' src="/assets/busca/Lupa/Shape@2x.png" alt="lupa" />
        <input type="text" className='h-auto w-screen placeholder-red-500 pl-6 focus:outline-red-600 outline-none rounded-xl' placeholder='Procure por heróis' name="search" id="" />
      </section>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </main>

  )
}
