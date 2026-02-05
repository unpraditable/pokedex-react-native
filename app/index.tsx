import PokemonCard from "@/components/pokemon/PokemonCard";
import { usePokemonList } from "@/hooks/use-pokemon-list";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

export default function PokedexScreen() {
  const { data, loadMore, loading } = usePokemonList();

  return (
    <FlatList
      data={data}
      style={styles.grid}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      numColumns={2}
      ListFooterComponent={loading ? <ActivityIndicator /> : null}
      contentContainerStyle={{
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 24,
        backgroundColor: "#111",
      }}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
  },
});
