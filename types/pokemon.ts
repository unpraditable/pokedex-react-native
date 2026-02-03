export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: PokemonListItem[];
  next: string | null;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}
