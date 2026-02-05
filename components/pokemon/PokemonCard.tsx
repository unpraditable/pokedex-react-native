import { POKEMON_TYPE_COLOR } from "@/constants/pokemonTypeColor";
import { PokemonListItem } from "@/types/pokemon";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PokemonCard({ pokemon }: { pokemon: PokemonListItem }) {
  const colorTypes = pokemon.types
    .map((type) => POKEMON_TYPE_COLOR[type])
    .filter(Boolean);

  const gradientColors =
    colorTypes.length >= 2
      ? (colorTypes as [string, string, ...string[]])
      : ([colorTypes[0] ?? "#777", colorTypes[0] ?? "#777"] as [
          string,
          string,
        ]);

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.header}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.id}>#{pokemon.id.toString().padStart(3, "0")}</Text>
      </View>
      <View style={styles.typeContainer}>
        {pokemon.types.map((type: any) => (
          <View key={type} style={styles.typeBadge}>
            <Text style={styles.typeText}>{type}</Text>
          </View>
        ))}
      </View>

      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 8,
    margin: 4,
    overflow: "hidden",
    minHeight: 150,
    flex: 1,
    maxWidth: "50%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  id: {
    color: "#fff",
    fontWeight: "600",
  },
  typeContainer: {
    marginTop: 8,
  },
  typeBadge: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 4,
  },
  typeText: {
    color: "#fff",
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  image: {
    position: "absolute",
    right: -10,
    bottom: -10,
    width: 100,
    height: 100,
  },
});
