import Image from 'next/image';
import { FC } from 'react'
import Navbar from './Navbar';
import Link from 'next/link'

interface LoadingProps {
  className?: string;
}

const loading: FC = () => {
  return <nav className='flex gap-24 max-md:flex-col max-md:gap-0 items-center justify-center '>
  <Link href="/">
  <Image height={0} width={400} className='h-20 max-w-xs' src="/assets/logo/Group@3x.png" alt='logo'/>
  </Link>

<div className='w-2/3 min-w-0 max-md:h-54 mt-10'>
<Navbar />
</div>
</nav>
}

export default loading;