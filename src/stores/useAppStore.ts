import { create } from "zustand";
import { createRecipesSlice, type recipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { type FavoritesSliceType, createFavoriteSlice } from "./favoritesSlice";

export const useAppStore = create<recipeSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
})))