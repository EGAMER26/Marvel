import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-white h-screen'>
      <header>
      <div className='w-auto flex flex-col justify-center text-center h-auto'>
        <div className='flex justify-center'>
          <Image width={300} height={300} src="/assets/logo/Group.png" alt="Logo" layout="fixed"/>
        </div>
        <h1 className='font-sans text-3xl font-bold mt-6'>EXPLORE O UNIVERSO</h1>
        <p className='mt-2'>Mergulhe no domínio Deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
      </div>
      </header>
    </main>

  )
}
