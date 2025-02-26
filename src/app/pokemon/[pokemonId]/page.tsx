"use client";

import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "@/utils/api";
import PokemonDetailCard from "@/components/PokemonDetailsCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PokemonDetailCardProps } from "@/utils/types";

export default function PokemonDetail() {
  const { pokemonId } = useParams() as { pokemonId: string };
  const [pokemon, setPokemon] = useState<PokemonDetailCardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    
    const loadPokemon = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchPokemonDetails(pokemonId);
        if (isMounted) setPokemon(data);
      } catch {
        if (isMounted) setError("Failed to fetch Pokémon details.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (pokemonId) loadPokemon();

    return () => {
      isMounted = false;
    };
  }, [pokemonId]);

  if (loading) return <h1 className="text-center text-2xl font-bold">Loading Pokémon...</h1>;
  if (error || !pokemon) return <h1 className="text-center text-2xl font-bold text-red-600">{error || "Pokémon Not Found"}</h1>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <PokemonDetailCard {...pokemon} />
      <Link href="/" className="inline-block mt-4 bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-md">
        ← Back
      </Link>
    </div>
  );
}
