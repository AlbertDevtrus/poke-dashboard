import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface FavoritesState {
  favorites: { [key:string]: SimplePokemon };
}

// const getInitialState = (): FavoritesState => {
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')

//   return favorites;
// }

const initialState: FavoritesState = {
  favorites: {}
  // ...getInitialState()
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;

      const { id } = pokemon;

      if (Boolean(state.favorites[id])) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      // MALA PRACTICA
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    },

    setFavoritePokemons(state, action: PayloadAction<{ [key:string]: SimplePokemon }>) {
      state.favorites = action.payload;
    }

  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;