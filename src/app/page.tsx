import PokemonList from "../components/PokemonList";
import { fetchPokemons } from "../utils/api";

export default async function HomePage() {
  const pokemons = await fetchPokemons();

  return <PokemonList pokemons={pokemons} />;
}
