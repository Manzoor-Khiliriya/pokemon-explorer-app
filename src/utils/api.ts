const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemons() {
    try {
        const response = await fetch(`${API_URL}?limit=50`);
        if (!response.ok) throw new Error("Failed to fetch Pokémon data");

        const data = await response.json();

        return data.results.map((pokemon: { name: string; url: string }) => {
            const id = Number(pokemon.url.match(/\/(\d+)\/?$/)?.[1]);
            return {
                id, 
                name: pokemon.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            };
        });
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
        return [];
    }
}

export async function fetchPokemonDetails(pokemonId: string) {
    try {
        const response = await fetch(`${API_URL}/${pokemonId}`);
        if (!response.ok) throw new Error("Failed to fetch Pokémon details");

        const data = await response.json();
        return {
            id: data.id,
            name: data.name,
            images: [ 
                data.sprites.front_default,
                data.sprites.back_default
            ],
            abilities: data.abilities.map((a: { ability: { name: string } }) => a.ability.name),
            types: data.types.map((t: { type: { name: string } }) => t.type.name),
            stats: data.stats.map((s: { stat: { name: string } }) => s.stat.name),
            moves: data.moves.map((m: { move: { name: string } }) => m.move.name)
        };
    } catch (error) {
        console.error("Error fetching Pokemon details:", error);
        return null;
    }
}
