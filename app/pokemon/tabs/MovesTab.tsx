import { StyleSheet, Text, View } from "react-native";

export default function MovesTab({ pokemon }: any) {
  return (
    <View style={styles.card}>
      {pokemon.moves.slice(0, 20).map((m: any) => (
        <Text key={m.move.name}>• {m.move.name}</Text>
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
});
