import { StyleSheet, Text, View } from "react-native";

function extractChain(chain: any, arr: string[] = []) {
  arr.push(chain.species.name);
  if (chain.evolves_to.length > 0) {
    extractChain(chain.evolves_to[0], arr);
  }
  return arr;
}

export default function EvolutionsTab({ evolution }: any) {
  if (!evolution) return null;

  const list = extractChain(evolution.chain);

  return (
    <View style={styles.card}>
      {list.map((name) => (
        <Text key={name} style={styles.item}>
          {name}
        </Text>
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
  item: { marginBottom: 8 },
});
