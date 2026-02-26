import { View, Text, Image, StyleSheet } from "react-native";

export default function PokemoDetailHeader({ pokemon }: any) {
  const mainType = pokemon.types[0].type.name;

  return (
    <View style={[styles.container, { backgroundColor: typeColor[mainType] }]}>
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.id}>#{pokemon.id.toString().padStart(3, "0")}</Text>

      <View style={styles.types}>
        {pokemon.types.map((t: any) => (
          <View key={t.type.name} style={styles.badge}>
            <Text style={styles.badgeText}>{t.type.name}</Text>
          </View>
        ))}
      </View>

      <Image
        source={{
          uri: pokemon.sprites.other["official-artwork"].front_default,
        }}
        style={styles.image}
      />
    </View>
  );
}

const typeColor: Record<string, string> = {
  grass: "#7AC74C",
  fire: "#EE8130",
  water: "#6390F0",
  bug: "#A6B91A",
};

const styles = StyleSheet.create({
  container: { padding: 20, height: 280 },
  name: { color: "#fff", fontSize: 28, fontWeight: "800" },
  id: { color: "#fff", position: "absolute", right: 20, top: 20 },
  types: { flexDirection: "row", marginTop: 8 },
  badge: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
  },
  badgeText: { color: "#fff", fontWeight: "600" },
  image: {
    width: 180,
    height: 180,
    position: "absolute",
    right: 20,
    bottom: -40,
  },
});
