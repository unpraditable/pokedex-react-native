import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AboutTab from "./tabs/AboutTab";
import EvolutionsTab from "./tabs/EvolutionsTab";
import MovesTab from "./tabs/MovesTab";
import StatsTab from "./tabs/StatsTab";

const TABS = ["About Pokemon", "Base Stats", "Evolutions", "Moves"];

export default function PokemonDetailTabs({
  pokemon,
  species,
  evolution,
}: any) {
  const [active, setActive] = useState(TABS[0]);

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {TABS.map((tab) => (
          <Pressable key={tab} onPress={() => setActive(tab)}>
            <Text style={[styles.tab, active === tab && styles.active]}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      {active === "About Pokemon" && (
        <AboutTab pokemon={pokemon} species={species} />
      )}

      {active === "Base Stats" && <StatsTab pokemon={pokemon} />}

      {active === "Evolutions" && <EvolutionsTab evolution={evolution} />}

      {active === "Moves" && <MovesTab pokemon={pokemon} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 40 },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  tab: {
    paddingVertical: 12,
    color: "#888",
    fontWeight: "600",
  },
  active: {
    color: "#2563eb",
    borderBottomWidth: 2,
    borderColor: "#2563eb",
  },
});
