import { Character} from '@/types/marvels'
import { FC } from 'react'
import Image from 'next/image'

interface characterCardProps {
  character: Character;

}

const CharacterCard: FC<characterCardProps> = ({character}) => {
  console.log(character); 
  return <div className="w-full max-w-sm h-64 bg-red-400 rounded-xl">
  <figure>
    <Image 
    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
    alt={character.name}
    width={500}
    height={500}
    />
  </figure>
  <div className="flex justify-between w-auto ">
    <p>{character.name}</p>
    <Image width={20} height={15}src="/assets/icones/heart/Path Copy 2@3x.png" alt="" />
  </div>
</div>
}

export default CharacterCard