import { Comics} from '@/types/marvels'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface comicCardProps {
  comic: Comics;

}

const ComiCard: FC<comicCardProps> = ({comic}) => {
  console.log(comic); 
  return <div className="w-full max-w-sm h-80 mb-8 hover:scale-105 hover:shadow-black hover:shadow-2xl overflow-hidden ease-in duration-200">
    <Link href={`details/${comic.id}`}>
  <div className='overflow-hidden h-56 border-b-4 border-solid border-red-600'>
      
    <figure className=''>
      <Image
      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      alt={comic.name}
      width={500}
      height={500}
      className='object-fill'
      />
    </figure>
  </div>
  <div className="flex justify-between w-auto h-20 font-bold items-center ">
    <p>{comic.title}</p>
  </div>
</Link>
</div>
}

export default ComiCard;