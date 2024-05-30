import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Lista de pokemons",
};

export default function PokemonsPage() {
  return (
    <div className="flex flex-col p-2">
      <span className="text-4xl my-2 text-blue-900">
        Pokemons favoritos <small className="opacity-30">Global state</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
