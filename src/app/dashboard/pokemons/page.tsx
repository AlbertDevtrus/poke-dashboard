import { PokemonResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";



export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemons.map( pokemon => (
            <Image 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} 
              width={100}
              height={100}
              key={pokemon.id}
              alt={pokemon.name}
            />
          ) )
        }
      </div>
    </div>
  );
}

async function getPokemons(limit = 20, offset = 0): Promise<SimplePokemon[]> {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
  
  const pokemons = data.results.map( pokemon => {
    return { 
      id: pokemon.url.split('/').at(-2)!, 
      name: pokemon.name 
    }
  } )

  return pokemons;
}
