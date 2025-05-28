import { type StateCreator } from "zustand";
import type { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[]

}

export const createFavoriteSlice: StateCreator<FavoritesSliceType> = () => ({
    favorites: []
})