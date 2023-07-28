import { CharacterDataWrapper } from '@/types/marvels';
import md5 from 'md5';
const API_BASE_URL="https://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY="802207b8b666888bab323db04d2dd0f3";
const API_PRIVATE_KEY="8a341c4e0af12cfaba2a76ba82a2635dc8aedbab";

const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp: string) => md5(timeStamp+API_PRIVATE_KEY
  +API_PUBLIC_KEY)

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&
hash=${hash}`

const handleResponse = async <T>(response: Response) => {
  if(!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json();
  return data.data as T;
}

export const getCharacters = async (): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?${query}`;
  const response = await fetch(url);
  return handleResponse<CharacterDataWrapper>(response);
}
export const detailCharacter = async (characterId: string): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters/${characterId}?${query}`;
  const response = await fetch(url);
  return handleResponse<CharacterDataWrapper>(response);
}