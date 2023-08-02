export interface Character {
id: number,
name: string,
description: string,
available: string,
thumbnail: {
  path: string,
  extension: string
}
}
export interface Comics {
  id: number,
  title: string,
  description: string,
  available: number,
  thumbnail: {
  path: string,
  extension: string,
  
}
}
export interface Series {
  id: number
}

export interface CharacterDataWrapper {
  results: Character[]

}

export interface ComicDataWrapper {
  results: Comics[]
}

export interface SeriesDataWrapper {
  results: Series[]
}