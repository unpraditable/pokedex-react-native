import { StyleSheet, Text, View } from "react-native";

export default function AboutTab({ pokemon, species }: any) {
  const flavor =
    species.flavor_text_entries.find((f: any) => f.language.name === "en")
      ?.flavor_text ?? "";

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{flavor}</Text>

      <Text>Height: {pokemon.height / 10} m</Text>
      <Text>Weight: {pokemon.weight / 10} kg</Text>

      <Text style={{ marginTop: 8 }}>Abilities:</Text>
      {pokemon.abilities.map((a: any) => (
        <Text key={a.ability.name}>• {a.ability.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  text: { marginBottom: 12 },
});
