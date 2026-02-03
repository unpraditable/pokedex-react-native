const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList(offset = 0, limit = 20) {
  const res = await fetch(
    `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch pokemon list");
  }
  return res.json();
}

export async function fetchPokemonDetail(name: string) {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch pokemon detail");
  }
  return res.json();
}
