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
  return <div className='container'>
    <div className="aboutContent">
      <h2>${character.results[0].name}</h2>
      <p>${character.results[0].description}</p>
    </div>
    <Image 
    src={`${character.results[0].thumbnail.path}.${character.results[0].thumbnail.extension}`}
    alt={character.results[0].name}
    width={500}
    height={500}
    />
  </div>
}

export default CharacterPage;