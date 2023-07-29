// import { useState } from 'react';
// import { Character} from '@/types/marvels'
// import { FC } from 'react'


// function CharacterList = function ({ character }) {
//   const [sortedCharacters, setSortedCharacters] = useState(characters);
//   const [isAscending, setIsAscending] = useState(true);

//   const sortCharacters = () => {
//     const sorted = [...sortedCharacters].sort((a, b) => isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
//     );
//     setSortedCharacters(sorted);
//     setIsAscending(!isAscending);
//   };

//   return (
//     <div>
//       <button onClick={sortCharacters}>
//         Ordenar por {isAscending ? 'descendente' : 'ascendente'}
//       </button>

//       {/* Renderize a lista de personagens */}
//       <ul>
//         {sortedCharacters.map((character) => (
//           <li key={character.id}>{character.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CharacterList;
