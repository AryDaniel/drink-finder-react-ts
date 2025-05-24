import { create } from "zustand";
import { createRecipesSlice, type recipeSliceType } from "./recipeSlice";

export const useAppStore = create<recipeSliceType>( (...a) => ({
    ...createRecipesSlice(...a)
}))