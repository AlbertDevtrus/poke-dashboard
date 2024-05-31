"use client";

import { useAppSelector } from "@/app/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favPokemons = Object.values(
    useAppSelector((state) => state.pokemons.favorites)
  );

  return (
    <>
      {favPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favPokemons} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
