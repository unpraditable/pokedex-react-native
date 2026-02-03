import { Pressable, StyleSheet, Text } from "react-native";

export default function PokemonCard({ name }: { name: string }) {
  return (
    <Pressable style={styles.card}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 12,
  },
  text: {
    fontSize: 18,
    textTransform: "capitalize",
  },
});
