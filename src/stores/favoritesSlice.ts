import { type StateCreator } from "zustand";
import type { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
}

export const createFavoriteSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExist(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorites => favorites.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state) => ({
                favorites: [ ...state.favorites, recipe]
            }))
            /* This can be another way
            set({
                favorites: [ ...get().favorites, recipe]
            })
            */
        }
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})