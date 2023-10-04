import { useQuery } from "@tanstack/vue-query";
import { getPokemon } from "../api/pokemon-api";

const usePokemon = (pokeId: number) => {
  const pokemonQuery = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => getPokemon(pokeId),
    select: (res) => res.data,
  });

  return { pokemonQuery };
};

export default usePokemon;
