"use client";

import Link from "next/link";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { toggleFavorite } from "@/app/store/pokemons/pokemons";

import { SimplePokemon } from "../interfaces/simplePokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  const { id, name } = pokemon;

  const isFavorite = useAppSelector((state) =>
    Boolean(state.pokemons.favorites[id])
  );
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={handleToggle}
          >
            <div className="text-red-600">
              {isFavorite ? (
                <IoHeart size={25} />
              ) : (
                <IoHeartOutline size={25} />
              )}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
