import Allnav from '@/components/Allnav';
import {detailCharacter} from '@/utils/api';
import Image from 'next/image';
import { FC } from "react";

interface CharacterPageProps {
  params: {
    id: string;
  }

}

const CharacterPage: FC<CharacterPageProps> = async ({ params }) => {
  const { id } = params;
  const character = await detailCharacter(id);
  const {thumbnail, name, description} = character.results[0];
  return <div className='px-20 bg-green-100 h-screen text-slate-600 z-10 relative'>
    <Allnav />
    <section className="pl-40 flex ">
      <h2 className='text-18Xl text-white right-0 z-0 font-extrabold tracking-widest absolute'>{name}</h2>
    <div className="mt-32 w-80 relative z-10">
      <div className="flex justify-between">
        <h2 className=' text-4xl font-bold'>{name}</h2>
        <Image width={40} height={10} className='h-9' src='/assets/icones/heart/Path Copy 2@3x.png' 
        alt='like button'/>
      </div>
      <p className='mt-10 tracking-widest '>{description}</p>
      <div className="flex mt-10">
      <div className="grid grid-cols-2 gap-4 w-full">
      {/* Primeira linha */}
      <div className="col-span-1 ">
        <p>Quadrinhos</p>
        <div className="flex items-center">
          <Image width={30} height={100} className='mt-2' src="/assets/icones/book/Group@3x.png" alt="book" />
          <p className='ml-4'>{name}</p>
        </div>
      </div>
      <div className="col-span-1">
      <p>Filmes</p>
        <div className="flex items-center">
          <Image width={30} height={100} className='mt-2' src="/assets/icones/video/Shape@3x.png" alt="book" />
          <p className='ml-4'>{name}</p>
        </div>
      </div>

      {/* Segunda linha */}
      <div className="col-span-2">
        <div className="flex gap-4 items-center">
      <p>Quadrinhos</p>
          <Image width={80} height={100} src="/assets/review/Group 4@3x.png" alt="book" />
        </div>
      </div>

      {/* Terceira linha */}
      <div className="col-span-2 mt-2">
      <div className="flex gap-4 items-center">
      <p>Último quadrinho:</p>
          <p>{name}</p>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div className="m-auto mt-32 relative z-10">
      <Image
      src={`${thumbnail.path}.${character.results[0].thumbnail.extension}`}
      alt={character.results[0].name}
      width={500}
      height={500}
      />
    </div>
    </section>
  </div>
}

export default CharacterPage;