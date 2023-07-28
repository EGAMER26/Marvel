import {detailCharacter} from '@/utils/api';
import { FC } from "react";

interface CharacterPageProps {
  params: {
    id: string;
  }

}

const CharacterPage: FC<CharacterPageProps> = async ({ params }) => {
  const { id } = params;
  const character = await detailCharacter(id);
  return <div>CharacterPage</div>
}

export default CharacterPage;