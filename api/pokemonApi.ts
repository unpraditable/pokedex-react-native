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

export async function getPokemonDetailType(
  url: string,
): Promise<{ types: string[] }> {
  const res = await fetch(url);
  if (!res.ok) {
    return { types: [] };
  }

  const data = await res.json();
  const types = data.types.map(
    (typeInfo: { type: { name: string } }) => typeInfo.type.name,
  );

  return { types };
}
