import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `Pagina del pokemon ${name}`,
  };
}

export default async function PokemonPage({ params }: Props) {
  const { id } = params;

  const pokemon = await getPokemon(id);

  return (
    <div>
      <div>{pokemon.name}</div>
    </div>
  );
}

async function getPokemon(id: string): Promise<Pokemon> {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((response) => response.json());

  return pokemon;
}
