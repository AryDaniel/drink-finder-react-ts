import { create } from "zustand";
import { createRecipesSlice, type recipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<recipeSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})))