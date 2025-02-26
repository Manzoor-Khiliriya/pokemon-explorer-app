import Link from "next/link";
import { Pokemon } from "../utils/types";
import Image from "next/image";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className="block p-4 bg-white shadow-md rounded-lg hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
      <Image 
        src={pokemon.image} 
        alt={pokemon.name} 
        width={96} 
        height={96} 
        className="w-24 h-24 mx-auto"
        priority
      />
      <h2 className="text-xl font-bold text-center capitalize mt-2">{pokemon.name}</h2>
    </Link>
  );
}
