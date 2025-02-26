export interface Pokemon {
  id: number;
  name: string;
  image: string;
}


export interface PokemonDetailCardProps {
  name: string;
  images: string[];
  abilities: string[];
  types: string[];
  stats: string[];
  moves: string[];
}