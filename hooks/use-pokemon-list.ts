import { fetchPokemonList } from "@/api/pokemonApi";
import { useCallback, useEffect, useRef, useState } from "react";

export function usePokemonList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const hasMounted = useRef(false);

  const loadMore = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    try {
      const res = await fetchPokemonList(offset);
      setData((prev) => [...prev, ...res.results]);
      setOffset((prev) => prev + 20);
    } finally {
      setLoading(false);
    }
  }, [offset, loading]);

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
