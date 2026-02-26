import { StyleSheet, Text, View } from "react-native";

export default function StatsTab({ pokemon }: any) {
  return (
    <View style={styles.card}>
      {pokemon.stats.map((s: any) => (
        <View key={s.stat.name} style={styles.row}>
          <Text style={styles.label}>{s.stat.name.toUpperCase()}</Text>

          <Text style={styles.value}>{s.base_stat}</Text>

          <View style={styles.bar}>
            <View
              style={[
                styles.fill,
                {
                  width: `${(s.base_stat / 150) * 100}%`,
                },
              ]}
            />
          </View>
        </View>
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
  row: { color: "white", marginBottom: 12 },
  label: { color: "white", fontWeight: "600" },
  value: { color: "white", position: "absolute", left: 100 },
  bar: {
    height: 8,
    borderRadius: 8,
    marginTop: 4,
  },
  fill: {
    height: 8,
    backgroundColor: "#22c55e",
    borderRadius: 8,
  },
});
