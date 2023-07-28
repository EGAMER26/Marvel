import Image from 'next/image'
import {FC} from 'react'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({}) => {
  return <section className='flex gap-5 w-2/3 relative h-16 items-center '>
  <Image width={34} height={24} className='h-6 w-6 absolute left-6' src="/assets/busca/Lupa/Shape@2x.png" alt="lupa" />
    <input type="text" className='h-16 w-screen placeholder-red-500 bg-red-200 pl-20 focus:outline-red-600 outline-none rounded-full' placeholder='Procure por heróis' name="search" id="" />
  </section>
}

export default Navbar