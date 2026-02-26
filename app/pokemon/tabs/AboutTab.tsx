import { StyleSheet, Text, View } from "react-native";

export default function AboutTab({ pokemon, species }: any) {
  const flavor =
    species.flavor_text_entries.find((f: any) => f.language.name === "en")
      ?.flavor_text ?? "";

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{flavor}</Text>

      <Text style={styles.text}>Height: {pokemon.height / 10} m</Text>
      <Text style={styles.text}>Weight: {pokemon.weight / 10} kg</Text>

      <Text style={styles.text}>Abilities:</Text>
      {pokemon.abilities.map((a: any) => (
        <Text style={styles.text} key={a.ability.name}>
          • {a.ability.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },
  text: { color: "white", marginBottom: 12 },
});
