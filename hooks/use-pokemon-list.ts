import { fetchPokemonList, getPokemonDetailType } from "@/api/pokemonApi";
import { PokemonListItem } from "@/types/pokemon";
import { useCallback, useEffect, useRef, useState } from "react";

export function usePokemonList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const hasMounted = useRef(false);

  async function processPokemonData(
    pokemonList: PokemonListItem[],
  ): Promise<PokemonListItem[]> {
    return Promise.all(
      pokemonList.map(async (pokemon) => {
        const id = parseInt(pokemon.url.split("/").slice(-2, -1)[0]);
        const details = await getPokemonDetailType(pokemon.url);

        return {
          ...pokemon,
          id,
          types: details.types,
        };
      }),
    );
  }

  const loadMore = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    try {
      const res = await fetchPokemonList(offset);
      const processedResults = await processPokemonData(res.results);
      setData((prev) => [...prev, ...processedResults]);
      setOffset((prev) => prev + 20);
    } finally {
      setLoading(false);
    }
  }, [loading, offset]);

  useEffect(() => {
    loadMore();
    hasMounted.current = true;
  }, []);

  const handleLoadMore = () => {
    if (!hasMounted.current) return;
    loadMore();
  };

  return {
    data,
    loading,
    loadMore: handleLoadMore,
  };
}
