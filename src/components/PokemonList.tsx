"use client";

import { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../utils/types";

export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  const [search, setSearch] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Pokemons</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
