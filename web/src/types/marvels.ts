export interface Character {
id: number,
name: string,
description: string,
available: number,
thumbnail: {
  path: string,
  extension: string
}
}
export interface Comics {
  id: number,
  name: string, 
  title: string,
  description: string,
  available: number,
  thumbnail: {
  path: string,
  extension: string,
  
}
}

export interface CharacterDataWrapper {
  results: Character[]

}

export interface ComicDataWrapper {
  results: Comics[]
}