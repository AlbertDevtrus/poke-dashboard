import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col p-2">
      <span className="text-4xl my-2 text-blue-900">
        Listado de pokemons <small className="opacity-30">estatico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}

async function getPokemons(limit = 20, offset = 0): Promise<SimplePokemon[]> {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  const pokemons = data.results.map((pokemon) => {
    return {
      id: pokemon.url.split("/").at(-2)!,
      name: pokemon.name,
    };
  });

  // throw new Error("Nuevo error en pokemons");

  return pokemons;
}
