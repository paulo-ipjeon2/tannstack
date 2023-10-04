import axios, { AxiosPromise } from "axios";

// type pokeInfo = {
//   pokeId: number;
// };

export const getPokemon = (pokeId: number): AxiosPromise<any> => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
};
