import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import PokemoDetailHeader from "./PokemonDetailHeader";
import PokemonDetailTabs from "./PokemonDetailTabs";

export default function PokemonDetailScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();

  const [pokemon, setPokemon] = useState<any>(null);
  const [species, setSpecies] = useState<any>(null);
  const [evolution, setEvolution] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const p = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
        (res) => res.json(),
      );

      const s = await fetch(p.species.url).then((res) => res.json());

      const e = await fetch(s.evolution_chain.url).then((res) => res.json());

      setPokemon(p);
      setSpecies(s);
      setEvolution(e);
    }

    load();
  }, [name]);

  if (!pokemon || !species) return <ActivityIndicator />;

  return (
    <ScrollView>
      <PokemoDetailHeader pokemon={pokemon} />
      <PokemonDetailTabs
        pokemon={pokemon}
        species={species}
        evolution={evolution}
      />
    </ScrollView>
  );
}
