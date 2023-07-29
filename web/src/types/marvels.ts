export interface Character {
id: number,
name: string,
description: string,
thumbnail: {
  path: string,
  extension: string
}
}
export interface Comics {
  id: number,
  name: string, 
  description: string,
  thumbnail: {
  path: string,
  extension: string
  
}
}

export interface CharacterDataWrapper {
  results: Character[]

}

export interface ComicDataWrapper {
  results: Comics[]
}