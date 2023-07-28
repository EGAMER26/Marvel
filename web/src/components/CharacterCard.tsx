import { Character} from '@/types/marvels'
import { FC } from 'react'

interface characterCardProps {
  character: Character;

}

const CharacterCard: FC<characterCardProps> = ({character}) => {
  return <div className="w-full max-w-sm h-64 bg-green-500">
  <picture>

  </picture>
  <div className="flex justify-between w-auto rounded-xl">
    <p>{character.name}</p>
    <img width={20} src="/assets/icones/heart/Path Copy 2@3x.png" alt="" />
  </div>
</div>
}

export default CharacterCard