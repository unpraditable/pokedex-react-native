import PokemonCard from "@/components/pokemon/PokemonCard";
import { usePokemonList } from "@/hooks/use-pokemon-list";
import { ActivityIndicator, FlatList } from "react-native";

export default function PokedexScreen() {
  const { data, loadMore, loading } = usePokemonList();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <PokemonCard name={item.name} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator /> : null}
    />
  );
}
