import Image from 'next/image';
import { FC } from 'react'

interface LoadingProps {
  className?: string;
}

const loading: FC<LoadingProps> = ({ }) => {
  return <div className="">
    <Image
    height={400}
    width={400}
    src='/assets/busca/gif/loading.gif'
    alt='loading logo'
    />
  </div>
}

export default loading;